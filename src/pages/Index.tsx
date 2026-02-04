import { BookOpen, ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
    const featuredBooks = [
        {
            id: 1,
            title: "O Pequeno Príncipe",
            author: "Antoine de Saint-Exupéry",
            price: "5.000 Kz",
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
            rating: 4.8
        },
        {
            id: 2,
            title: "1984",
            author: "George Orwell",
            price: "6.500 Kz",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
            rating: 4.9
        },
        {
            id: 3,
            title: "Dom Casmurro",
            author: "Machado de Assis",
            price: "4.800 Kz",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
            rating: 4.7
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <BookOpen className="h-8 w-8 text-primary" />
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Livraria JCBA
                        </h1>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Início</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Livros</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Categorias</a>
                        <a href="#" className="text-gray-700 hover:text-primary transition-colors">Sobre</a>
                    </nav>
                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                            <Heart className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <ShoppingCart className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16 text-center">
                <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    A sua livraria online em Angola
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Descubra um mundo de conhecimento e entretenimento. Livros físicos e digitais com entrega em todo o país.
                </p>
                <div className="flex gap-4 justify-center">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Explorar Livros
                    </Button>
                    <Button size="lg" variant="outline">
                        Ver Categorias
                    </Button>
                </div>
            </section>

            {/* Featured Books */}
            <section className="container mx-auto px-4 py-16">
                <h3 className="text-3xl font-bold mb-8 text-center">Livros em Destaque</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredBooks.map((book) => (
                        <Card key={book.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="aspect-[2/3] overflow-hidden">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="line-clamp-1">{book.title}</CardTitle>
                                <CardDescription>{book.author}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-1 mb-2">
                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-medium">{book.rating}</span>
                                </div>
                                <p className="text-2xl font-bold text-primary">{book.price}</p>
                            </CardContent>
                            <CardFooter className="flex gap-2">
                                <Button className="flex-1">
                                    <ShoppingCart className="h-4 w-4 mr-2" />
                                    Adicionar
                                </Button>
                                <Button variant="outline" size="icon">
                                    <Heart className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12 mt-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen className="h-6 w-6" />
                                <h4 className="text-xl font-bold">Livraria JCBA</h4>
                            </div>
                            <p className="text-gray-400">
                                A sua livraria online de confiança em Angola.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Termos de Serviço</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li>Email: info@livrariajcba.ao</li>
                                <li>Telefone: +244 XXX XXX XXX</li>
                                <li>Luanda, Angola</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2026 Livraria JCBA. Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Index;
