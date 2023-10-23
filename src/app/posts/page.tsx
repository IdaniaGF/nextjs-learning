import { Suspense } from "react";
import ListOfPosts from "./ListOfPosts";

// también se puede usar el componente suspense de react para lanzar el loader
export default async function PostsPage() {
  return (
    <section>
      <Suspense fallback={<p>Cargando posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  );
}
