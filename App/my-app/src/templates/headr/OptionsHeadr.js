import { ButtonHeadr } from '../../components/button/ButtonHeadr'



const options = ['Tecnology', 'Design', 'Culture', 'Bussiness', 'Politics', 'Opinion', 'Science', 'Health', 'Style', 'Travel']

export const OptionsHeadr = () =>{
    return(
        <ButtonHeadr options={options} />
    )
}