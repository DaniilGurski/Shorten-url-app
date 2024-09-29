import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { isValidUrl } from './utils/helpers'
import GlobalStyles from './components/styles/GlobalStyles'
import StyledContainer from './components/Container'
import Main from './components/Main'
import HeroOverlap from './components/HeroOverlap'
import Hero from './components/Hero'
import UrlShortener from './components/UrlShortener'
import ResultList from './components/ResultList'
import AdvancedStatistics from './components/AdvancedStatistics'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import axios from 'axios'


const fetchRebrandly = (longUrl) => {
  return axios.get(`https://tinyurl.com/api-create.php?url=${longUrl}`);
}


export default function App() {
  const [urlInput, setUrlInput] = useState("");
  const [formValid, setFormValid] = useState(true);
  const [shortenUrls, setShortenUrls] = useState([]);


  const { data, isLoading, refetch } = useQuery({
    queryFn: () => fetchRebrandly(urlInput),
    queryKey: ["tinyUrl"],
    enabled: false,
    select: (data) => {
      return data.data
    }
  });

  
  const onSubmit = (e) => {
    e.preventDefault();

    const isValid = urlInput.length > 0 && isValidUrl(urlInput);
    setFormValid(isValid)

    if (!isValid) {
      return
    }

    refetch();
  }


  useEffect(() => {
    if (data) {
      // filter out repeated short URLs
      const filteredUrls = shortenUrls.filter(urlGroup => urlGroup.shortUrl !== data);
      setShortenUrls([...filteredUrls, {longUrl: urlInput, shortUrl: data, selected: false}])
    }
  }, [data])


  useEffect(() => console.log(shortenUrls), [shortenUrls])

  return (
    <>
      <GlobalStyles />

      <Main>
        <StyledContainer $gap="clamp(5rem, 10vw, 7.5rem)">
          <HeroOverlap>
            <Hero />

            <UrlShortener
              onSubmit={onSubmit}
              urlInput={urlInput}
              setUrlInput={setUrlInput}
              formValid={formValid}
            />

            <ResultList setShortenUrls={setShortenUrls} shortenUrls={shortenUrls}/>
          </HeroOverlap>
          <AdvancedStatistics />
          <CallToAction />
        </StyledContainer>
      </Main>

      <Footer />
    </>
  )
}