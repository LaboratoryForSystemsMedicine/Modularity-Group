import requests
from bs4 import BeautifulSoup

def get_publication_info(doi):
    url = f"https://api.crossref.org/works/{doi}"
    response = requests.get(url)
    
    if response.status_code == 200:
        data = response.json()
        return data['message']
    else:
        return None

def insert_publication_info(html_content, publication_info):
    soup = BeautifulSoup(html_content, 'html.parser')
    ol_tag = soup.find('ol')
    
    if ol_tag:
        authors_list = [f"{author['given']} {author['family']}" for author in publication_info['author']]
        if len(authors_list) > 4:
            authors = ', '.join(authors_list[:4]) + ', et al.'
        else:
            authors = ', '.join(authors_list)
        publication_date = publication_info.get('published-print', publication_info.get('published-online', {'date-parts': [['Unknown']]}))['date-parts'][0]
        publication_date = '-'.join(map(str, publication_date))
        list_item_html = f"""
        <li>{authors}.<strong> {publication_info['title'][0]}.</strong>{publication_info['container-title'][0].title()}. {publication_date}. <a href="https://doi.org/{publication_info['DOI']}">{publication_info['DOI']}</a></li>
            
        </li>
        """
        ol_tag.append(BeautifulSoup(list_item_html, 'html.parser'))
        return str(soup)
    else:
        return None

# Example usage
if __name__ == "__main__":


    # read a csv file containing a list of DOIs
    import os
    import sys
    dir_path = os.path.dirname(os.path.realpath(__file__))
    file_name = "related_papers.csv"
    file_path = os.path.join(dir_path, file_name)
    with open(file_path, "r") as file:
        dois = file.readlines()
    file_path = os.path.join(dir_path, "references_template.html")
    with open(file_path, "r", encoding="utf-8") as file:
        html_content = file.read()
    for doi in dois:
        info = get_publication_info(doi)
        
        if info:
            
            
            html_content = insert_publication_info(html_content, info)
        else:
            print(f"DOI {doi} not found.")
    file_path = os.path.join(dir_path, "references.html")
    if html_content:
        with open(file_path, "w", encoding="utf-8") as file:
            file.write(html_content)
        print("HTML file updated successfully.")
    else:
        print("Section not found in the HTML content.")

    