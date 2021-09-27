# Arcane 404 Blog

<div align="center">
	<!-- <a title="" target="_blank" href=""><img alt="" src="" /></a> -->
	<a title="open web app" target="_blank" href="https://the-arcane-404-blog-app.herokuapp.com/">
		<img alt="Web Status" src="https://img.shields.io/website-up-down-sucess-important/https/the-arcane-404-blog-app.herokuapp.com/.svg?style=for-the-badge" />
	</a>
	<a title="see contributors" href="#original-contributors">
		<img alt="Contributors" src="https://img.shields.io/github/contributors/Arcane-404/arcane-404-blog?style=for-the-badge&color=lightgreen" />
	</a>
	<a target="_blank" href="https://www.heroku.com/">
		<img alt="Heroku" src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=FFF" />
	</a>
</div>

## Get Started

To run this project, we need a few things

- required: [Node.js][node-js-link] + [MongoDB][mongo-db-link]

1. clone repo

```txt
HTTPS  : git clone https://github.com/Arcane-404/arcane-404-blog.git

SSH    : git clone git@github.com:Arcane-404/arcane-404-blog.git

GH-CLI : gh repo clone Arcane-404/arcane-404-blog
```

2. `cd ./arcane-404-blog`
3. `git switch -c develop`
4. `npm run update`
   - check & merge any updates
   - install server-side packages
   - install client-side packages
5. create `.env`
   - copy & paste keys
   - get your values from:
     - [MongoDB URI setup][mongo-db-setup]

```env
SKIP_PREFLIGHT_CHECK = true
JWT_TOKEN = secret
MONGODB_URI = [ db-link ]

# development: mongodb://localhost/[db-name]
# production: mongodb+srv://[db-user-name]:[db-password]@[server-cluster-name]:[port-number]/[db-name]
# e.g. mongodb+srv://the-arcane-404:the-password-404@foo123-shard-00-03-a1b2c.mongodb.net:27017/blog_app_db
```

6. if Mac, enter `chmod +x .husky/pre-commit`
   - if Windows, skip this step
7. start `npm run dev`

## General Info

### Folder Architecture

<details>
  <summary>View client structure</summary>

```shell
arcane-404-blog/client/
├─ public/
│  ├─ icons/
│  │  ├─ favicon.ico
│  ├─ index.html
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ constants/
│  ├─ containers/
│  ├─ contexts/
│  ├─ hooks/
│  ├─ json/
│  ├─ pages/
│  ├─ services/
│  ├─ theme/
│  ├─ utils/
│  ├─ App.jsx
│  ├─ index.js
├─ .env
—
```

</details>

<details>
  <summary>View server structure</summary>

```shell
arcane-404-blog/
├─ client/
├─ config/
├─ controllers/
├─ middlewares/
├─ models/
├─ routes/
index.js
```

</details>

<details>
  <summary>View general structure</summary>

```shell
arcane-404-blog/
├─ .github/
├─ .husky/
├─ .env
├─ .editorconfig
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .lintstagedrc.json
├─ .prettierignore
├─ .prettierrc.json
├─ index.js
├─ package.json
├─ README.md
```

</details>

<br />

### Workflow Strategy

<details>
  <summary>Our dev life cycle</summary>

### General Workflow

- #. Starting the day: pull all updates

1. Work on branch off of `develop`
2. Work on code
3. Message the reviewer

- #. Ending the day: commit/push updates

### Simple Workflow Checklist

- **Asana**: create or update task 'To-Do'
- **VS Code + Git**: branch, commit message, push
- **GitHub**: manually create Pull Request
- **Asana**: move task 'In Review'
- **Discord**: message reviewer
- **VS Code + Git**: pull, branch (create || continue)
- **Asana**: update or move task 'In Progress'

### Asana Task Strategy

- **1 Epic** _initiative contains a unique_ **Sprint #** _to follow any_ **Tasks** _or_ **Bugs**
- Epic: type branch name (descriptor)
- Task: sub-tasks of commit messages

### Git Branch Strategy

- work on a **support branch**, PR to the **develop branch**, but never the **main branch**
- core branch: main \ develop \ release
- support branch: feature \ style \ fix \ chore \ test

### Discord Review Strategy

- submit any PR to review in the `#🎟-code-review`
- post `@[username] [quick-message] [pull-request-link]`

### Block Component Strategy

- **Components** are **Connections** to a **Container** that make a **Page**
- building blocks of Atomic Design + Folder Structure
</details>

<details>
  <summary>Our file naming convention</summary>

```shell
React
- components/: _Component.styles.js + index.jsx
- connections/: _Connection.jsx + _Connection.styles.js + index.jsx
- containers/: _Container.jsx + _Container.styles.js + index.jsx
- pages/: _CurrentPage.jsx
- services/: _User.services.js

Node
- controllers/: _User.controllers.js
- model/: _User.model.js
- routes/: _User.route.js

General
- index.js: single source path for each folder
- export { default as Component } from './[path]'
```

</details>

<details>
  <summary>Our code guideline</summary>

### Patterns to Follow

- white-space
- single quotes
- no semi-colon
- parent Component fn == arrow fn
  - deconstruct props
- child helper fn == arrow fn
  - if fn has one line, then make it inline
  - else open to block scope, {}
- callback fn
  - if single arg, none: `fn(item ⇒ ())`
  - else, use (): `fn((item, index) => ())`
- open brackets, not condensed

### Code Sample

```jsx
// rafce (shortcut) || rfc (default)
import React, { useState, useEffect } from 'react'
import { Button } from './components' // PascalCase

const isEmpty, hasKey, getRandomNumber // camelCase
const DESKTOP_SIZE = 1080 // CAP_CASE + fixed value
const arr = [ 'a', 'b', 'c' ]
const obj = { num1: 1, num2: 2, num3: 3 }

const Component = ({ num1, num2, num3 }) => {

  const [ count, setCount ] = useState('')

  // const handleClick = (e) => setCount(count + 1)

  const handleClick = (e) => {
    setCount(count + 1)
  }

  useEffect(() => {
    console.log('check state update:', count)
  }, [ num1, num2, num3 ])

  return (
	 <div>
  	<h2>Hooks Example: <code>{ count }</code></h2>
		<a { ...obj } obj={{ num4: 4 }}>show me</a>

		<button onClick={ handleClick }>increment</button>
    <button onClick={ (e) => console.log('+') }>log</button>

		{
		 arr.length && arr.map((item, index) => (
			<Button key={ uuid() }>{ item }</Button>
		 ))
		}

		{
		 Object.keys(obj).length && (
		  <>
			 <a href="#">Home Page</a>
			 <a href="#">About Page</a>
		  </>
		 )
		}
    </div>
  )
}

export default Component
```

</details>

<details>
  <summary>Our block setup</summary>

### more for block setup

### Important Parts

- components/
- connections/
- containers/
- pages/

**example: Login Form**

### components/

```jsx
// create Button, Label, Input, ErrorText

// Button/ → _Button.styles.js
import { chakra, Button } from '@chakra-ui/react'
export const ButtonBox = chakra(Button, {})

// Button/ → _index.jsx
import React from 'react'
import { ButtonBox } from './_Button.styles'

export default function Button({ children, ...props }) {
	return <ButtonBox {...props}>{children}</ButtonBox>
}

// index.js
export { default as Button } from './Button'
```

### containers/

```jsx
// create TextField → Button + Label + Input + ErrorText

// TextField/ → _TextField.styles.js
import { chakra, FormControl } from '@chakra-ui/react'
export const TextFieldBox = chakra(FormControl, {})

// TextField/ → _TextField.jsx
import React from 'react'
import { TextFieldBox } from './_TextField.styles'
import { Label, Input, ErrorText } from '../components'

export default function TextField({ children, ...props }) {
	return <TextFieldBox {...props}>{children}</TextFieldBox>
}
TextField.Input = function TextField(props) {
	return <Input {...props} />
}
// ...

// TextField/ → index.jsx
import React, { useState } from 'react'
import TextField from './_TextField'

const TextFieldConnection = ({ type, name, label, placeholder, error }) => {
	const [value, setValue] = useState('')
	const onChange = (e) => setValue(e.target.value)

	const inputProps = {
		type,
		id: name,
		name,
		placeholder,
		value,
		onChange,
	}

	return (
		<TextField isInvalid={error}>
			<TextField.Label htmlFor={name} text={label} />
			<TextField.Input {...inputProps} />
			{error && <TextField.Error text={error.mesage} />}
		</TextField>
	)
}

// index.js
export { default as TextField } from './TextField'
```

## containers/

```jsx
// create LoginForm → Form + Heading, Submit

// LoginForm/ → _LoginForm.styles.js
import { chakra } from '@chakra-ui/react'
export const FormBox = chakra('form', {})

// LoginForm/ → _LoginForm.jsx
import React from 'react'
import { FormBox } from './_FormBox.styles'
import { Button } from '../components'

export default function LoginForm ({ children, ...props }) {
	return <FormBox { ...props }>{ children }</FormBox>
}
LoginForm.Submit = ({ children, ...props }) {
	return <Button { ...props }>{ children }</Button>
}
// ...

// LoginForm/ → index.jsx
import React, { useState } from 'react'
import LoginForm from './_LoginForm'
import { TextField } from '../connections'

const LoginFormContainer = () => {

	const [ values, setValues ] = useState('')
	const onSubmit = (e) => e.preventDefault()

	return (
		<LoginForm>
  		<LoginForm.Heading>Login</LoginForm.Heading>
      <TextField name="email" label="email" />
      <TextField name="password" label="Password" />
  		<LoginForm.Submit>Submit</LoginForm.Submit>
		</LoginForm>
	)
}

// index.js
export { default as LoginForm } from './LoginForm'
```

## pages/

```jsx
import React from 'react'
import { LoginForm } from '../containers'

const HomePage = () => {
	return (
		<>
			<LoginForm />
		</>
	)
}
```

## DONE

</details>

<br />

## Core Features

- Register & verify a new user account
- Login & verify a valid user account
- view all our blog post article at the home page
- select one blog post to view the whole content
- for users, upvote or downvote the blog post
- only for admins, submit a new blog post

## API & DB Design

<table>
   <!-- <tr><td></td></tr> -->
   <!-- <a target="_blank" href=""><img alt="" src="" /></a> -->
	 <caption><h3><b>User</b></h3></caption>
	 <thead>
      <tr>
				<th>Method</th>
				<th>Path</th>
				<th>Description</th>
			</tr>
	 </thead>
   <tbody>
      <tr>
				<td><b>POST</b></td>
				<td><code>/api/user/register</code></td>
				<td>enter new user account</td>
			</tr>
			<tr>
				<td><b>POST</b></td>
				<td><code>/api/user/login</code></td>
				<td>enter existing user account</td>
			</tr>
			<tr>
				<td><b>POST</b></td>
				<td><code>/api/user/validateToken</code></td>
				<td>verify if user is in a current session</td>
      </tr>
   </tbody>
</table>

```json
{
  "username": { "STRING", "default": "anonymous" },
  "email": { "STRING", "required", "unique", "index" },
  "password": "STRING",
  "avatar": "STRING",
  "role": { "STRING", "default": "USER" },
  "createdAt": "DATE"
}
```

<table>
   <!-- <tr><td></td></tr> -->
   <!-- <a target="_blank" href=""><img alt="" src="" /></a> -->
	 <caption><h3><b>Blog</b></h3></caption>
	 <thead>
      <tr>
				<th>Method</th>
				<th>Path</th>
				<th>Description</th>
			</tr>
	 </thead>
   <tbody>
      <tr>
				<td><b>GET</b></td>
				<td><code>/api/blog/all</code></td>
				<td>view all blog post</td>
			</tr>
			<tr>
				<td><b>GET</b></td>
				<td><code>/api/blog/:id</code></td>
				<td>view one blog post from blog ID</td>
			</tr>
			<tr>
				<td><b>POST</b></td>
				<td><code>/api/blog/create</code></td>
				<td>create one new blog post</td>
			</tr>
			<tr>
				<td><b>PUT</b></td>
				<td><code>/api/blog/:id?vote=_</code></td>
				<td>update up/down vote for specific blog post</td>
			</tr>
   </tbody>
</table>

```json
{
	"author": {
		"id": { "ref": "USER" },
		"username": "STRING"
	},
	"title": "STRING",
	"body": "STRING",
	"upvote": [{ "ref": "USER" }],
	"downvote": [{ "ref": "USER" }],
	"createdOn": "DATE"
}
```

## Tools & Technologies

<table>
   <!-- <tr><td></td></tr> -->
   <!-- <a target="_blank" href=""><img alt="" src="" /></a> -->
   <tbody>
     <tr>
       <td><h3>Project Management</h3></td>
       <td>
         <a target="_blank" href="https://asana.com/">
  				 <img alt="Asana" src="https://img.shields.io/badge/Asana-FC636B?style=for-the-badge&logo=asana&logoColor=FFF" />
    		 </a>
         <a target="_blank" href="https://www.notion.so/">
  				 <img alt="Notion" src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=FFF" />
    		 </a>
         <a target="_blank" href="https://discord.com/">
  				 <img alt="Discord" src="https://img.shields.io/badge/Discord-404EED?style=for-the-badge&logo=discord&logoColor=FFF" />
    		 </a>
         <a target="_blank" href="https://zoom.us/">
  				 <img alt="Zoom" src="https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=FFF" />
    		 </a>
       </td>
     </tr>
     <tr>
       <td><h3>Design</h3></td>
       <td>
         <a target="_blank" href="https://figma.com/">
  				 <img alt="Figma Design" src="https://img.shields.io/badge/Figma_Design-F24E1E.svg?style=for-the-badge&logo=figma&logoColor=FFF" />
    		 </a>
          <a target="_blank" href="https://www.invisionapp.com/">
  				 <img alt="InVision" src="https://img.shields.io/badge/InVision-FF3366?style=for-the-badge&logo=invision&logoColor=FFF" />
    		 </a>
       </td>
     </tr>
     <tr>
       <td><h3>Develop</h3></td>
			 <td>
          <a target="_blank" href="https://code.visualstudio.com/">
  				 <img alt="VS Code" src="https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual-studio-code&logoColor=FFF" />
    		 </a>
          <a target="_blank" href="https://git-scm.com/">
  				 <img alt="Git" src="https://img.shields.io/badge/Git-F05033.svg?style=for-the-badge&logo=git&logoColor=FFF" />
    		 </a>
         <a target="_blank" href="https://github.com/">
  				 <img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=FFF" />
    		 </a>
         <a target="_blank" href="https://www.postman.com/">
  				 <img alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=FFF" />
    		 </a>
       </td>
    </tr>
 		<tr>
   		<td><h3>Front-End</h3></td>
 			<td>
        <a target="_blank" href="https://reactjs.org/">
    			<img alt="React.js" src="https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
				</a>
        <a target="_blank" href="https://chakra-ui.com/">
    			<img alt="Chakra-UI" src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://reactrouter.com/">
    			<img alt="React Router" src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://react-query.tanstack.com/">
    			<img alt="React Query" src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=FFF" />
				</a>
 				<br />
        <a target="_blank" href="https://emotion.sh/docs/introduction">
    			<img alt="Emotion" src="https://img.shields.io/badge/Emotion-FF69B4?style=flat-square&logo=emotion&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.framer.com/motion/">
    			<img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-000000?style=flat-square&logo=framer&logoColor=0000FF" />
				</a>
        <a target="_blank" href="https://formik.org/">
    			<img alt="Formik" src="https://img.shields.io/badge/Formik-1C64F2?style=flat-square&logo=formik&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://axios-http.com/">
    			<img alt="Axios" src="https://img.shields.io/badge/Axios-671DDF?style=flat-square&logo=axios&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/yup">
    			<img alt="yup" src="https://img.shields.io/badge/yup-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/localforage">
    			<img alt="localforage" src="https://img.shields.io/badge/localforage-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/prop-types">
    			<img alt="Prop-Types" src="https://img.shields.io/badge/Prop--Types-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
 			</td>
 		</tr>
 		<tr>
 			<td><h3>Back-End</h3></td>
 			<td>
        <a target="_blank" href="https://nodejs.org/en/">
  				<img alt="Node.js" src="https://img.shields.io/badge/Node.js-43853d?style=for-the-badge&logo=Node.js&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://expressjs.com/">
  				<img alt="Express.js" src="https://img.shields.io/badge/Express.js-404d59.svg?style=for-the-badge&logo=express&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://jwt.io/">
    			<img alt="JWT" src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jwt&logoColor=FFF" />
				</a>
 				<br />
        <a target="_blank" href="https://nodemon.io/">
    			<img alt="Nodemon" src="https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/dotenv">
    			<img alt="dotenv" src="https://img.shields.io/badge/dotenv-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/bcrypt">
    			<img alt="bcrypt" src="https://img.shields.io/badge/bcrypt-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/yup">
    			<img alt="yup" src="https://img.shields.io/badge/yup-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/morgan">
    			<img alt="morgan" src="https://img.shields.io/badge/morgan-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/helmet">
    			<img alt="helmet" src="https://img.shields.io/badge/helmet-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/cors">
    			<img alt="cors" src="https://img.shields.io/badge/cors-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
 			</td>
 		</tr>
 		<tr>
 			<td><h3>Database</h3></td>
 			<td>
      	<a target="_blank" href="https://www.mongodb.com/">
 				 	<img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=FFF" />
     		</a>
      	<a target="_blank" href="https://mongoosejs.com/">
 				 	<img alt="Mongoose (ODM)" src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=FFF" />
     		</a>
 			</td>
 		</tr>
 		<tr>
 			<td><h3>Other</h3></td>
 			<td>
        <a target="_blank" href="https://editorconfig.org/">
					<img alt="EditorConfig" src="https://img.shields.io/badge/EditorConfig-E0EFEF?style=flat-square&logo=editorconfig&logoColor=000" />
				</a>
        <a target="_blank" href="https://prettier.io/">
					<img alt="Prettier" src="https://img.shields.io/badge/Prettier-1A2C34?style=flat-square&logo=prettier&logoColor=F7BA3E" />
				</a>
        <a target="_blank" href="https://eslint.org/">
					<img alt="ESLint" src="https://img.shields.io/badge/ESLint-3A33D1?style=flat-square&logo=eslint&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/lint-staged">
					<img alt="Lint-Staged" src="https://img.shields.io/badge/lint--staged-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://typicode.github.io/husky/#/">
					<img alt="Husky" src="https://img.shields.io/badge/Husky-607D8B?style=flat-square&logo=husky&logoColor=FFF" />
				</a>
 				<br />
        <a target="_blank" href="https://www.npmjs.com/package/concurrently">
					<img alt="concurrently" src="https://img.shields.io/badge/concurrently-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/npm-run-all">
					<img alt="npm-run-all" src="https://img.shields.io/badge/npm--run--all-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/rimraf">
					<img alt="rimraf" src="https://img.shields.io/badge/rimraf-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
        <a target="_blank" href="https://www.npmjs.com/package/serve">
					<img alt="serve" src="https://img.shields.io/badge/serve-231F20?style=flat-square&logo=npm&logoColor=FFF" />
				</a>
 			</td>
   	</tr>
		<tr>
 			<td><h3>Mentions</h3></td>
 			<td>
				<p>RESTful API - CRUD - MVC</p>
				<p>React Hooks - Compound-Components</p>
			</td>
   	</tr>
   </tbody>
</table>

### Web Resources

- [readme.so/](https://readme.so/)
- [carbon.now.sh/](https://carbon.now.sh/)
- [openchakra.app/](https://openchakra.app/)
- [mockaroo.com/](https://www.mockaroo.com/)
- [lucidchart.com/](https://www.lucidchart.com/pages/)
- [avatars.dicebear.com/](https://avatars.dicebear.com/styles)
- [ascii-tree-generator.com/](https://ascii-tree-generator.com/)
- [codestream.com/](https://www.codestream.com/)
- [thunderclient.io/](https://www.thunderclient.io/)
- [app.uploadcare.com/](https://app.uploadcare.com/)

## Original Contributors

<table>
	<!-- <tr><td></td></tr> -->
	<!-- <a target=""  href=""><img alt="" src="" /></a> -->
	<thead>
		<tr>
			<th align="center">Profile</th>
			<th align="center">Main Role</th>
			<th align="center">Name (Username)</th>
			<th align="center">Links</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<img alt="🖼" width="40" src="https://avatars.githubusercontent.com/u/37319530?v=4" />
			</td>
			<td>Project Lead</td>
			<td>
				<span>Michael F Alvarez</span>
				<span>(awwmicky)</span>
			</td>
			<td>
				<a target="_blank"  href="https://github.com/awwmicky">
					<img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=FFF" />
				</a>
				<a target="_blank"  href="https://www.linkedin.com/in/awwmicky/">
					<img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=FFF" />
				</a>
			</td>
		</tr>
		<tr>
			<td>
				<img alt="🖼" width="40" src="https://avatars.githubusercontent.com/u/8674990?v=4" />
			</td>
			<td>Front-End Dev</td>
			<td>
				<span>Adnan Niaz</span>
				<span>(sanixstudio)</span>
			</td>
			<td>
				<a target="_blank"  href="https://github.com/sanixstudio">
					<img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=FFF" />
				</a>
				<a target="_blank"  href="https://www.linkedin.com/in/sanixstudio/">
					<img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=FFF" />
				</a>
			</td>
		</tr>
		<tr>
			<td>
				<img alt="🖼" width="40" src="https://avatars.githubusercontent.com/u/36058286?v=4" />
			</td>
			<td>Front-End Dev</td>
			<td>
				<span>Mario Alvarez</span>
				<span>(mariofalvarez)</span>
			</td>
			<td>
				<a target="_blank"  href="https://github.com/mariofalvarez">
					<img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=FFF" />
				</a>
				<a target="_blank"  href="https://www.linkedin.com/in/mariofalvarez/">
					<img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=FFF" />
				</a>
			</td>
		</tr>
		<tr>
			<td>
				<img alt="🖼" width="40" src="https://avatars.githubusercontent.com/u/52964062?v=4" />
			</td>
			<td>Back-End Dev</td>
			<td>
				<span>Herman Liu</span>
				<span>(hermsicle)</span>
			</td>
			<td>
				<a target="_blank"  href="https://github.com/hermsicle">
					<img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=FFF" />
				</a>
				<a target="_blank"  href="https://www.linkedin.com/in/hermanliu168/">
					<img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=FFF" />
				</a>
			</td>
		</tr>
		<tr>
			<td>
				<img alt="🖼" width="40" src="https://avatars.githubusercontent.com/u/13038720?v=4" />
			</td>
			<td>Full Stack Dev</td>
			<td>
				<span>Clarence Cheung</span>
				<span>(kleranscoding)</span>
			</td>
			<td>
				<a target="_blank"  href="https://github.com/kleranscoding">
					<img alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=FFF" />
				</a>
			</td>
		</tr>
	</tbody>
</table>

<!--  -->

<!-- Top Badges -->

[badge-feedback]: https://img.shields.io/badge/Ask_Me-anything-1abc9c.svg?style=for-the-badge
[badge-welcome]: ___

<!-- Contributors Badge -->

[badge-github]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=FFF
[badge-linkedin]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=FFF

<!--  -->

[node-js-link]: https://nodejs.org/en/
[mongo-db-link]: https://www.mongodb.com/
[mongo-db-setup]: https://studio3t.com/knowledge-base/articles/mongodb-atlas-tutorial/
