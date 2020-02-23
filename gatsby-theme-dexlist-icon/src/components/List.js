import React from 'react'
import styled from '@emotion/styled'
import Layout from './layout'
import Img from "gatsby-image"
import Icons from './grid'
import Card from './card'
import Hero from './hero'
import Item from './item'
import PlaceHolder from './placeholder'
import Name from './name'

const Icon = styled(Img)`
  border-radius: 22.5%;
  display: block;
  margin: 0 auto;
`

const List = ({ data: { page } }) => {
  const icons = page.items
  return (
    <Layout>
      <Hero />
      <Icons>
        {icons.map(item => {
          return (
            <Card
              key={item.name}
              href={item.link}
              title={item.name}
            >
              <Item>
                <PlaceHolder className={page.id}>
                  <Icon fluid={item.logo.childImageSharp.fluid} />
                </PlaceHolder>
                <Name>{item.name}</Name>
              </Item>
            </Card>
          )
        })}
      </Icons>
    </Layout>
  )
}

export default List