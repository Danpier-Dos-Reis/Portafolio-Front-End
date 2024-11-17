class Article:
    def __init__(self, titulo, categoria, descripcion, contenido):
        self.titulo = titulo
        self.categoria = categoria
        self.descripcion = descripcion
        self.contenido = contenido

    # Serializador personalizado
    def article_to_dict(obj):
        if isinstance(obj, Article):
            return {"titulo": obj.titulo, "categoria": obj.categoria, "descripcion": obj.descripcion, "contenido": obj.contenido}
        raise TypeError("El objeto no es serializable")
    
class GithubProject:
    def __init__(self, link, titulo, descripcion, tecnologias):
        self.link = link
        self.titulo = titulo
        self.descripcion = descripcion
        self.tecnologias = tecnologias

    # Serializador personalizado
    def githubproject_to_dict(obj):
        if isinstance(obj, GithubProject):
            return {"link": obj.link, "titulo": obj.titulo, "descripcion": obj.descripcion, "tecnologias": obj.tecnologias}
        raise TypeError("El objeto no es serializable")
    
class Work:
    def __init__(self, image_link, titulo, descripcion, tecnologias):
        self.image_link = image_link
        self.titulo = titulo
        self.descripcion = descripcion
        self.tecnologias = tecnologias

    # Serializador personalizado
    def work_to_dict(obj):
        if isinstance(obj, Work):
            return {"link": obj.image_link, "titulo": obj.titulo, "descripcion": obj.descripcion, "tecnologias": obj.tecnologias}
        raise TypeError("El objeto no es serializable")