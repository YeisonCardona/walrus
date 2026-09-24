import datetime
import json

DOMAIN = "https://walrus.dunderlab.com"
OUTPUT_FILE = "sitemap.xml"

static_pages = [
    {"path": "/tienda", "priority": "1.0"},
    {"path": "/taller", "priority": "0.8"},
    {"path": "/nosotros", "priority": "0.8"},
    {"path": "/contacto", "priority": "0.8"},
    {"path": "/carrito-de-compras", "priority": "0.8"},
    {"path": "/cliente/", "priority": "0.8"},
]

products = []
with open('../../products/dist/products.json', 'r') as file:
  data = json.load(file)
  for section in data:
    for product in section['products']:
      products.append(product['slug'])

def generate_sitemap():
    date_now = datetime.datetime.now().strftime('%Y-%m-%d')

    xml_content = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_content += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    for page in static_pages:
        xml_content += f"  <url>\n"
        xml_content += f"    <loc>{DOMAIN}{page['path']}</loc>\n"
        xml_content += f"    <lastmod>{date_now}</lastmod>\n"
        xml_content += f"    <priority>{page['priority']}</priority>\n"
        xml_content += f"  </url>\n"

    for slug in products:
        xml_content += f"  <url>\n"
        xml_content += f"    <loc>{DOMAIN}/articulo/{slug}</loc>\n"
        xml_content += f"    <lastmod>{date_now}</lastmod>\n"
        xml_content += f"    <priority>0.6</priority>\n"
        xml_content += f"  </url>\n"

    xml_content += "</urlset>"

    try:
        with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
            f.write(xml_content)
        print(f"Sitemap generado con éxito en: {OUTPUT_FILE}")
    except Exception as e:
        print(f"Error al escribir el archivo: {e}")

if __name__ == "__main__":
    generate_sitemap()
