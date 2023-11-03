import {useRouter} from 'next/router'

function BlogPostsPage() {
  //http://localhost:3001/blog/10/20
  // ... => meanings catch all segments
  const router = useRouter();
  console.log(router.query); // return an object of array {slug: ['10', '20']}
  return (
    <div>
      <h1>The Blog Posts Page</h1>
    </div>
  );
}
export default BlogPostsPage;
