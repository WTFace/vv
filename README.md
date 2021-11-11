
#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### components (src > components)

- `Banner`
- `FormInput`

#### shared layout (src > top, footer)

- `Top`
    `Nav`, `Search`, `Update`
- `Footer`

#### indivisual pages (src > pages)

- `Login`, `Intro`, etc


### routes (src > routes.js)

```sh
<Switch>
  {routes.map((r, i) => <Route key={i} exact={r.exact} path={r.path} component={r.component}></Route>)}
</Switch>
```