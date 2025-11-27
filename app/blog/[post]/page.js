import { client } from "@/sanity/lib/client";
import BlogPostHeader from "./components/BlogPostHeader";
import Container from "@/app/components/Container";
import { PortableText } from "@portabletext/react";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import imageUrlBuilder from '@sanity/image-url';
import Image from "next/image";

const builder = imageUrlBuilder(client);

function urlFor(source) {
 return builder.image(source);
}

async function getBlogPosts(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug] {
    title,
    description,
    date,
    "slug":slug.current,
    image,
    content
  }`;

  const posts = await client.fetch(query, { slug });
  return posts;
}



export default async function Page({ params }) {
  const { post } = await params; //the slug
  const posts = await getBlogPosts(params.post); //what we fetch from getBlogPosts

  return posts.length > 0 && ( //&& abbreviates if else. If the posts.length > 0 evaluates false, it does not evalute/run the (...) contents 
     <Container>
      <div className="mx-auto max-w-prose space-y-8 py-8">
        <BlogPostHeader post={posts[0]} />
        <hr className="border-primary-200" />
        <article className="prose md:prose-md prose-primary mx-auto">
          <PortableText value={posts[0].content} components={portableTextComponents} />
        </article>
      </div>
    </Container>
  );
}


const portableTextComponents = {
  types: {
    image: ImageComponent,
  },
};


function ImageComponent({ value }) {
  const { width, height } = tryGetImageDimensions(value);

  return (
    <Image
      src={urlFor(value).fit("max").auto("format").url()}
      width={width}
      height={height}
      alt={value.alt || 'Blog post image'} //|| is again a shorthand for if-else
      loading="lazy"
      className="mx-auto md:max-w-prose rounded-lg"
      style={{
        aspectRatio: width / height,
      }}
    />
  );
}