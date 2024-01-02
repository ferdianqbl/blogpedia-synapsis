This is the project Blog for Synapsis Frontend Test work, by Muhammad Ferdian Iqbal

> [Demo Project](https://blogpedia-synapsis.vercel.app/)

# 🪂Getting Started🪂

First, clone this project:

```bash
git clone https://github.com/ferdianqbl/blogpedia-synapsis.git
```

Then, install the dependencies:

```bash
cd blogpedia-synapsis
npm install
```

Then, create a .env.local file at the root of the project and copy the environments from .env.example:

```bash
cp .env.example .env.local
```

Then, fill in the variables according to your environment:

```
NEXT_PUBLIC_API_URL=https://gorest.co.in/public/v2
NEXT_PUBLIC_TOKEN=YOUR_TOKEN
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🚀Features🚀

#### Home

> 5 Random Posts and Users

#### Posts

> All Posts with Search by Title and Pagination

#### Detail Post

> - Post content with author
> - List of Posts from the author
> - Comments and add a new Comment

#### Users

> All Authors with Search by name, Pagination, and Add new Author

#### Detail Author

> - Profile the author
> - Edit and delete author profile
> - Add new Post
> - List of posts from the author
> - Delete post
