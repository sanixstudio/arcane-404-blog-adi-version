import NewPost from './_PostForm.jsx'

export default function NewPostForm () {
	return (
		<NewPost>
    	<NewPost.FormHeading>Create New Post</NewPost.FormHeading>
    	<NewPost.FormControler isRequired>
      	<NewPost.FormLabeling>Topic</NewPost.FormLabeling>
      	<NewPost.FormSelect placeholder="Select Topic">
      	<option value="option1">Front-end</option>
      	<option value="option2">Back-end</option>
      	<option value="option3">UX/UI</option>
      	<option value="option3">Database</option>
      	<option value="option3">Design</option>
      	</NewPost.FormSelect>
    	</NewPost.FormControler>
    	<NewPost.FormControler isRequired>
      	<NewPost.FormLabeling>Title</NewPost.FormLabeling>
      	<NewPost.FormInput type="text" />
    	</NewPost.FormControler>
    	<NewPost.FormControler isRequired>
      	<NewPost.FormLabeling>Description</NewPost.FormLabeling>
      	<NewPost.FormTextArea />
    	</NewPost.FormControler>
    	<NewPost.FormControler>
      	<NewPost.FormLabeling>Tags</NewPost.FormLabeling>
      	<NewPost.FormInput type="text" />
    	</NewPost.FormControler>
    	<NewPost.FormButton>Submit</NewPost.FormButton>
  	</NewPost>
	)
}
