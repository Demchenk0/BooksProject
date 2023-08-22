import {
	LoginCitateContainer,
	LoginCitateText,
	LoginCitateBorder,
	LoginCitateAutor,
	LoginCitateIcon,
} from 'ui/AuthPage';

const LoginCitate = () => {
	return (
		<LoginCitateContainer>
			<span>
				<LoginCitateIcon />
			</span>
			<LoginCitateText>
				<p>І все на світі треба пережити,</p>
				<p>бо кожен фініш — це по суті старт.</p>
				<p>І наперед не треба ворожити,</p>
				<p>і за минулим плакати не варто...</p>
			</LoginCitateText>
			<LoginCitateBorder></LoginCitateBorder>
			<LoginCitateAutor>Ліна Костенко</LoginCitateAutor>
		</LoginCitateContainer>
	);
};

export default LoginCitate;
