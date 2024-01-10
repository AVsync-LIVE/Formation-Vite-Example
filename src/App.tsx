import { Page, StyleHTML, Gap, Button } from '@avsync.live/formation'

export const App = () => {
  return (
    <Page>
      <Gap gap={1} center>
        <StyleHTML>
          <h1>Formation Vite Example</h1>
          <p>This project demonstrates how to use Formation with Vite.</p>
          <blockquote>v{ APP_VERSION } </blockquote>
        </StyleHTML>
        <Gap center>
          <Button
            text='Read docs'
            icon='book'
            iconPrefix='fas'
            primary
            hero
            href='https://formation.avsync.live'
          />
          <Button
            text='View Repo'
            icon='github'
            iconPrefix='fab'
            hero
            href='https://github.com/AVsync-LIVE/Formation-Vite-Example'
          />
        </Gap>
       
      </Gap>
    </Page>
  )
}