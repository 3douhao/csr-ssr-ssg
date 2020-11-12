import axios from 'axios'
import { useQuery } from 'react-query'
import Item from '../../Item'
import {useRouter} from 'next/router'
import Img from '../../Img'

const getPokeman = async (key, name) => {
  const { data: pokeman } = await axios.get(`/api/pokeman?name=${escape(name)}`)
  return ({
    ...pokeman,
    image: `/pokeman/${pokeman.name.english.toLowerCase()}.jpg`
  })
}
const Name = () => {
  const router = useRouter()
  const { data : pokeman} = useQuery(['pokeman', router.query.name], getPokeman)
  return (
    <Item>
      {pokeman && 
        (
          <><Img src={pokeman.image} />
            <ul>
              {Object.entries(pokeman.base).map(([key, value]) => {
                return <li key={key}>{key}: {value}</li>
              })}
            </ul>
          </>
        )
}
    </Item>
  )
}
export default Name
