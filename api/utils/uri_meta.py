from urllib.parse import urljoin
import posixpath

def join_urls(base, *args):
    return urljoin(base, posixpath.join(*args))

def define_uri(url, type='GET', relation='many', id=None, **kwargs):
    uri_items = {
        'url': url,
        'type': type
    }
    if relation:
        uri_items['relation'] = relation
    if id:
        uri_items['id'] = id
    uri_items.update(kwargs)
    return uri_items