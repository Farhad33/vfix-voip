import { ItConsultingData } from '../Data';
import {
    ItConsultingContainer,
    ItConsultingTitle,
    ItConsultingImage,
    ItConsultingParagraph,
    ItConsultingButton,
    RoutConsulting,
    ButtonConsultingRoute
} from './NavbarStyle';

export default function ServicesItConsulting() {

    return (
        <ItConsultingContainer>
            <ItConsultingTitle>
                <RoutConsulting href={ItConsultingData.route}>
                    {ItConsultingData.title}
                </RoutConsulting>
            </ItConsultingTitle>
            <ItConsultingImage src={ItConsultingData.icon} width={160} height={100} alt='image' />
            <ItConsultingParagraph>{ItConsultingData.paragraph}</ItConsultingParagraph>
            <ItConsultingButton>
                <ButtonConsultingRoute href={ItConsultingData.route}>
                    {ItConsultingData.button}
                </ButtonConsultingRoute>
            </ItConsultingButton>
        </ItConsultingContainer>
    );
}
