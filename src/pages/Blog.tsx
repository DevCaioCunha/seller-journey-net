
import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { File, Calendar } from "lucide-react";
import { BlogPost } from "@/types/blog";
import { Footer } from "@/components/Footer";

// Temporary mock data for blog posts
const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Novas técnicas de irrigação sustentável ganham destaque",
    excerpt: "Pesquisadores desenvolveram métodos inovadores para economizar água na agricultura...",
    content: "Pesquisadores desenvolveram métodos inovadores para economizar água na agricultura sem comprometer a produtividade das colheitas. Estas técnicas combinam sensores IoT com análise de dados em tempo real...",
    author: "Carlos Silva",
    date: "2025-05-10",
    imageUrl: "/placeholder.svg",
    tags: ["irrigação", "sustentabilidade", "tecnologia"]
  },
  {
    id: 2,
    title: "Mercado de orgânicos cresce 25% no último ano",
    excerpt: "O consumo de produtos orgânicos bateu recorde e produtores comemoram...",
    content: "O consumo de produtos orgânicos bateu recorde e produtores comemoram o aumento na demanda. Especialistas atribuem o crescimento à maior conscientização dos consumidores sobre saúde e meio ambiente...",
    author: "Ana Costa",
    date: "2025-05-08",
    imageUrl: "/placeholder.svg",
    tags: ["orgânicos", "mercado", "crescimento"]
  },
  {
    id: 3,
    title: "Nova política agrícola beneficia pequenos produtores",
    excerpt: "Governo anuncia pacote de incentivos para agricultura familiar...",
    content: "Governo anuncia pacote de incentivos para agricultura familiar com foco em crédito facilitado e assistência técnica. A medida deve beneficiar mais de 500 mil famílias em todo o país...",
    author: "Pedro Almeida",
    date: "2025-05-05",
    imageUrl: "/placeholder.svg",
    tags: ["política", "incentivos", "agricultura familiar"]
  }
];

const Blog = () => {
  const [posts] = useState<BlogPost[]>(mockPosts);

  // Format date to a more readable format
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-agrogoods-primary">Blog AgroGoods</h1>
          <Link to="/blog/escrever">
            <Button className="bg-agrogoods-primary hover:bg-agrogoods-dark">
              <File className="mr-2 h-4 w-4" /> Novo artigo
            </Button>
          </Link>
        </div>
        
        <p className="text-lg text-gray-600 mb-8">
          Acompanhe as últimas notícias e tendências do mundo agro
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map(post => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <CardTitle className="text-xl mb-2 text-agrogoods-primary">{post.title}</CardTitle>
                <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link to={`/blog/${post.id}`} className="text-agrogoods-secondary font-medium hover:text-agrogoods-primary transition-colors">
                  Ler mais
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
