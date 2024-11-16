class Article:
    def __init__(self, title, category, description, content):
        self.title = title
        self.category = category
        self.description = description
        self.content = content

    # Serializador personalizado
    def article_to_dict(obj):
        if isinstance(obj, Article):
            return {"title": obj.title, "category": obj.category, "description": obj.description, "content": obj.content}
        raise TypeError("El objeto no es serializable")

    # def __repr__(self):
    #     return f"Usuario(title={self.title}, category={self.category}, description={self.description}, content={self.content})"