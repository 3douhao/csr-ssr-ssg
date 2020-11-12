import styled from '@emotion/styled'

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  border: 2px hotpink solid;
  justify-content: space-between;
  grid-auto-flow: row;
  grid-gap: 10px;
  width: 100vw;
  color: hotpink;
  margin: auto;
  margin-top: 20px;
`
export default Gallery
