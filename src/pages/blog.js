import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: { frontmatter: { date: DESC } }) {
                nodes {
                  frontmatter {
                    date(formatString: "DD/MM/YYYY")
                    title
                  }
                  id
                  excerpt
                }
            }
        }
    `)

    return (
        <Layout>
            <p>Esses são os últimos posts:</p>
            <ul>
                {
                    data.allMdx.nodes.map((node) => (
                        <article key={node.id}>
                            <h2>{node.frontmatter.title}</h2>
                            <p>Postado em {node.frontmatter.date}</p>
                            <p>{node.excerpt}</p>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const Head = () => <title>Posts</title>

export default BlogPage
