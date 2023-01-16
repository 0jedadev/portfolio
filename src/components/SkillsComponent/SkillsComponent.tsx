import { Container, DivTitle, Skill, Title } from './styles'
import Line7 from "../../assets/Line7.svg"
import { CardSkillsComponent } from '../CardSkillsComponent/CardSkillsComponent'
export function SkillsComponent() {
    return (
        <Container>
            <DivTitle>
                <div>
                    <Title><span>#</span>skills</Title>
                    <img src={Line7} />
                </div>
            </DivTitle>
            <Skill>
                <CardSkillsComponent title={"Languages"} text={"JavaScript, TypeScript, NodeJS Go, Python, Java "} />
                <CardSkillsComponent title={"Frameworks"} text={"Bootstrap, ReactJS, React-Native, ExpressJS"} />
                <CardSkillsComponent title={"Databases"} text={"MySQL, MongoDB, PostgreSQL, SQLite "} />
                <CardSkillsComponent title={"Tools/Other"} text={"HTML, CSS, SCSS, GitHub, Git, VSCode, Figma, Canva, Font Awesome"} />
            </Skill>
        </Container>
    )
}