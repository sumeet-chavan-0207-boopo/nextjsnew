import { useRouter } from 'next/router'

const Blog = (props) => {
 
const router = useRouter();	
const { slug } = router.query;
return <div><p>Post: new blog {slug}</p>
  	
  </div>
}

export default Blog

