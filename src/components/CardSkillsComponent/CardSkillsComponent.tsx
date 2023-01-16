
import { Container, DivText, DivTitle, Title, Text} from './styles'

interface props {
    title: string,
    text: string

}
export function CardSkillsComponent(props: props) {
    return (
        <Container>
            <DivTitle>
                <Title>{props.title}</Title>
            </DivTitle>
            <DivText>
                <Text>{props.text}</Text>
            </DivText>
        </Container>
    )
}