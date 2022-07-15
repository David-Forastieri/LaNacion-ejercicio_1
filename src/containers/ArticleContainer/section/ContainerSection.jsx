import React, {useEffect, useState} from 'react'
import Card from '../../../componentes/card/Card';
import Titles from '../../../componentes/titles/Titles';
import SectionNav from './SectionNav';
import { ContainerNotes, TitleSection, SectionCard, ButtonMoreNotes } from './Sections.style';

const ContainerSection = () => {

  const taxonomyTagsGroup = [];
  const tagsCard = [];
  const tagsItemsList = [];
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
   getArticle();
  }, [])
  
  const getArticle = async () =>{
    const response = await fetch('https://api-test-ln.herokuapp.com/articles');
    const dataJson = await response.json();
    setArticles(dataJson);
  }
  
  const articleTags = Object.values(articles);
  articleTags.map(element => {
    for (let i = 0; i < element.length; i++) {

//---del total de articulos se toman solo los que tienen un "subtype 7"
      if(element[i].subtype === '7'){
        tagsCard.push(element[i])
      }

//---del total de articulos se toman solo las tags
      let taxonomyTags = element[i].taxonomy
      taxonomyTagsGroup.push(taxonomyTags.tags);
    }
  })

//se toman todas las tags y se ordenan de mayor a menor
  const tagsGroupOrder = taxonomyTagsGroup.sort((a, b)=>  b.length - a.length );

//se toman las primeras 10 tags para listar en un titulo
  const tagsItems = tagsGroupOrder.slice(0, 10);
  tagsItems.map(item =>{
    tagsItemsList.push(item[0])
  })


 //valor total de tags
  let algoTotalTaxonomyTags = taxonomyTagsGroup.map(e => e.length);
  const TotalTaxonomyTags = algoTotalTaxonomyTags.reduce((int1, int2) => {return int1 + int2}, 0)

  return (
    <ContainerNotes>
      <TitleSection>
        <Titles titleText={'Acumulado Grilla'} />
      </TitleSection>
      <SectionNav tagsItem={tagsItemsList} />
      <SectionCard>
        <Card dataArticles={tagsCard} />
      </SectionCard>
      <ButtonMoreNotes>mas notas de acumulado grilla</ButtonMoreNotes>
    </ContainerNotes>
  )
}

export default ContainerSection;