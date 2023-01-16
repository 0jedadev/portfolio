import { Container, Title, DivTitle, SubTitle , DivCard} from './styles'
import Line7 from "../../assets/Line7.svg"
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { CardComponent } from '../CardComponent/CardComponent';

export function ProjectsComponent() {
    return (
        <Container>
            <DivTitle>
                <div>
                    <Title><span>#</span>projects</Title>
                    <img src={Line7} />
                </div>
                <div>
                    <SubTitle>View all </SubTitle>
                    <TrendingFlatIcon />
                </div>
            </DivTitle>
            <DivCard>
            <CardComponent title={"ProjectX"} subtitle={"REACTJS, TYPESCRIPT, NODEJS"} subtitle2={"Portfolio Website"} imagem={""}/>
            <CardComponent title={"MonsterJuice"} subtitle={"REACTJS, TYPESCRIPT, NODEJS"} subtitle2={"Portfolio Website"} imagem={""}/>
            <CardComponent title={"CoronoBear"} subtitle={"REACTJS, TYPESCRIPT, NODEJS"} subtitle2={"Portfolio Website"} imagem={""}/>
            </DivCard>

        </Container>
    )
}