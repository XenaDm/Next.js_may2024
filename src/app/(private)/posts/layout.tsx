import {Metadata} from "next";

export const  metadata:Metadata = {
    title: '',
    description: 'PublicLayout metadata'
}
type Props = {children: React.ReactNode}
const PostsLayout = ({children}:Props)=>{

    return (
        <div>
            <div>Posts Layout</div>
            {children}
        </div>
    )
}

export default PostsLayout;