import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function Layout( ) {
  return (
    <div>
      <ThemeContextConsumer>
        {(context) => (
          <div>
            {context.theme}
            <button onClick={context.toggleTheme}>Toggle Theme</button>
          </div>
        )}
      </ThemeContextConsumer>
    </div>
  );
}
