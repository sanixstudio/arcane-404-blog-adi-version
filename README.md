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

- required: Node.js + MongoDB

1. clone repo

```txt
HTTPS  : git clone https://github.com/Arcane-404/arcane-404-blog.git

SSH    : git clone git@github.com:Arcane-404/arcane-404-blog.git

GH-CLI : gh repo clone Arcane-404/arcane-404-blog
```

2. `cd ./arcane-404-blog`
3. `git branch develop`
4. `npm run update`
   - check & merge any updates
   - install server-side packages
   - install client-side packages
5. create `.env`
   - copy & paste keys
   - get your values from:
     - [MongoDB](https://www.mongodb.com/)

```env
SKIP_PREFLIGHT_CHECK = true
MONGO_URI = mongodb+srv://[db-user-name]:[db-password]@[server-cluster-name]:[port-number]/[db-name]
# e.g. mongodb+srv://the-arcane-404:the-password-404@foo123-shard-00-03-a1b2c.mongodb.net:27017/blog_app_db
```

6. if Mac, `chmod +x .husky/pre-commit`
   - if Windows, skip
7. start `npm run dev`

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
