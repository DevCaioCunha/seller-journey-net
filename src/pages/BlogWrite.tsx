
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";
import { BlogPost } from "@/types/blog";

const BlogWrite = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    author: "",
    imageUrl: "/placeholder.svg",
    tags: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would save to a database
    // For now, we'll just show a success message and redirect
    
    const newPost: Partial<BlogPost> = {
      ...formData,
      date: new Date().toISOString().split('T')[0],
      tags: formData.tags.split(',').map(tag => tag.trim())
    };
    
    console.log('New blog post:', newPost);
    
    toast({
      title: "Artigo criado com sucesso!",
      description: "O artigo foi publicado no blog da AgroGoods."
    });
    
    // Redirect to the blog page
    setTimeout(() => {
      navigate('/blog');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-16 mt-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-agrogoods-primary mb-8">Escrever novo artigo</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input 
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Digite o título do artigo"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Resumo</Label>
              <Textarea 
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                placeholder="Um breve resumo do artigo (aparecerá na listagem)"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea 
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Conteúdo completo do artigo"
                className="min-h-[250px]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="author">Autor</Label>
              <Input 
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nome do autor"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="imageUrl">URL da imagem</Label>
              <Input 
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="URL da imagem de capa"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <Input 
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Tags separadas por vírgula (ex: agricultura, tecnologia, sustentabilidade)"
              />
            </div>
            
            <div className="pt-4 flex space-x-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => navigate('/blog')}
              >
                Cancelar
              </Button>
              <Button 
                type="submit" 
                className="bg-agrogoods-primary hover:bg-agrogoods-dark"
              >
                Publicar artigo
              </Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogWrite;
