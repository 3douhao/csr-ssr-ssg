import Img from '../Img'
import Item from '../Item'
import Head from 'next/head'
import Link from 'next/link'
import Input from '../Input'
import Gallery from '../Gallery'
import axios from 'axios'
import { useState } from 'react'
import { useQuery } from 'react-query'

const getPokeman = async function (key, q) {
  const { data } = await axios.get(`/api/search?q=${escape(q)}`)
  return data.map(pokeman => ({
    ...pokeman,
    image: `/pokeman/${pokeman.name.english.toLowerCase()}.jpg`
  }))
}

export default function Home () {
  const [query, setQuery] = useState('')
  const { data } = useQuery(['abc', query], getPokeman)
  const handleChange = e => {
    setQuery(e.target.value)
  }
  return (
    <div>
      <Head>
        <title>Crazy Pokeman</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Input placeholder='search' value={query} onChange={handleChange} />
      <Gallery>
        {data &&
          data.map(pokeman => (
            <Link href={`/pokeman/${pokeman.name.english.toLowerCase()}`}>
              <Item key={pokeman.id}>
                <Img src={pokeman.image} />
                <h2>
                  {pokeman.name.english} | {pokeman.id}
                </h2>
                <h4>{pokeman.type.join(',')}</h4>
              </Item>
            </Link>
          ))}
      </Gallery>
    </div>
  )
}
