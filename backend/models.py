class Article:
    def __init__(self, titulo, categoria, descripcion, contenido, fecha):
        self.titulo = titulo
        self.categoria = categoria
        self.descripcion = descripcion
        self.contenido = contenido
        self.fecha = fecha

    # Serializador personalizado
    def article_to_dict(obj):
        if isinstance(obj, Article):
            return {"titulo": obj.titulo, "categoria": obj.categoria, "descripcion": obj.descripcion, "contenido": obj.contenido, "fecha": obj.fecha}
        raise TypeError("El objeto no es serializable")
    
class GithubProject:
    def __init__(self, titulo, descripcion, tecnologias, github_link, image_link):
        self.titulo = titulo
        self.descripcion = descripcion
        self.tecnologias = tecnologias
        self.github_link = github_link
        self.image_link = image_link

    # Serializador personalizado
    def githubproject_to_dict(obj):
        if isinstance(obj, GithubProject):
            return {
                "titulo": obj.titulo,
                "descripcion": obj.descripcion,
                "tecnologias": obj.tecnologias,
                "github_link": obj.github_link,
                "image_link": obj.image_link
                }
        raise TypeError("El objeto no es serializable")
    
class Work:
    def __init__(self, titulo, descripcion, tecnologias, image_link, contenido, fecha):
        self.titulo = titulo
        self.descripcion = descripcion
        self.tecnologias = tecnologias
        self.image_link = image_link
        self.contenido = contenido
        self.fecha = fecha

    # Serializador personalizado
    def work_to_dict(obj):
        if isinstance(obj, Work):
            return {"titulo": obj.titulo, "descripcion": obj.descripcion, "tecnologias": obj.tecnologias, "image_link": obj.image_link}
        raise TypeError("El objeto no es serializable")