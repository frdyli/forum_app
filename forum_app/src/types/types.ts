export interface Post {
    id: string;
    title: string
    content: string;
  }
  
export interface Comment {
    id: string;
    postId: string;
    content: string;
  }
  
  