// Stick Header

window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	const titleHeight = document.querySelector('.header').scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add('header--sticky');
	} else {
		header.classList.remove('header--sticky');
	}
});

// (function () {
// 	// Popover
// 	$(function () {
// 		$('[data-toggle="popover"]').popover(options);
// 	});

// 	// Tooltip
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip(options);
// 	});
// })();

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
	return new bootstrap.Popover(popoverTriggerEl);
});

// Botão de copiar podcast

const copyButton = document.querySelectorAll('.copy-to-clip');

copyButton.forEach(btn => {
	btn.addEventListener('click', () => {
		copyToClipboard(btn);
		// tooltipShow(btn);

		tooltipFeedback(btn);
	});
});

function copyToClipboard(e) {
	const textToCopy = e.getAttribute('data-link');
	const textarea = document.createElement('textarea');
	textarea.setAttribute('readonly', '');
	textarea.style.position = 'absolute';
	textarea.value = textToCopy;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	document.body.removeChild(textarea);
}
function tooltipFeedback(b) {
	let feedback = $('[data-toggle="tooltip"]');

	// feedback.tooltip('show');

	b.addEventListener('mouseout', () => {
		feedback.tooltip('hide');
	});
}

// Lightbox (insert the class "lightbox" into <figure>)

const imageToLightbox = document.querySelectorAll('.lightbox');

imageToLightbox.forEach(image => {
	image.addEventListener('click', () => {
		if (!image.classList.contains('lightbox--show')) {
			const getImage = image.querySelector('img');
			const getImageSrc = getImage.getAttribute('src');
			const imageLightbox = document.createElement('div');

			imageLightbox.classList.add('lightbox__image');

			document.body.appendChild(imageLightbox);
			imageLightbox.innerHTML = `<img src="${getImageSrc}"/>`;
			console.log(getImageSrc);

			image.classList.add('lightbox--show');

			document.body.style.overflow = 'hidden';
			document.body.style.userSelect = 'none';

			closeLightbox(imageLightbox);
		}

		function closeLightbox(e) {
			const lightboxOpen = document.querySelector('.lightbox__image');
			e.addEventListener('click', () => {
				document.body.removeChild(e);
				image.classList.remove('lightbox--show');
				document.body.style.overflow = 'auto';
				document.body.style.userSelect = 'auto';
			});
		}
	});
});

// Boxes - inserir o título de acordo com o atributo

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
	const boxAttribute = box.getAttribute('data-box');

	const boxLabel = box.querySelector('.label');

	boxLabel.innerHTML = boxAttribute;
});

// Modal - Criação dos modais principais

const modalInfos = {
	creditos: {
		ariaLabel: 'creditos',
		modalSize: 'modal-lg',
		modalTitle: 'Créditos',
		modalBody: `
			<div class="row justify-content-center pt-5">
				<div class="col-12 col-md-10 col-lg-10">
					<span class="h5 mb-3 d-block">Ministério da Saúde</span>

					<div class="mb-5">
						<p class="mb-1">Nísia Trindade Lima</p>
						<p class="small text-muted"><em>Ministra</em></p>
					</div>

					<span class="h5 mb-3 d-block">Fundação Oswaldo Cruz – Fiocruz</span>
					
					<div class="mb-5">
						<p class="mb-1">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1">Cristiani Vieira Machado</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<span class="h5 mb-3 d-block">Campus Virtual Fiocruz</span>

					<div class="mb-5">

						<p class="mb-1">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora-geral</em></p>
						<p class="mb-1">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora-adjunta</em></p>
						<p class="mb-1">Adélia Araújo</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>
						<p class="mb-1">Renata Bernardes David</p>
						<p class="small text-muted"><em>Gerente de produção</em></p>
						<p class="mb-1">Isabela Schincariol</p>
						<p class="small text-muted"><em>Assessora de comunicação</em></p>
					
						<p class="mb-1">Fernanda Sousa</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>
					
						<span class="h6 mb-3 d-block">Design de Interface</span>
						
						<p class="mb-1">Aline Polycarpo</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>
						<p class="mb-1">Danilo Blum</p>
						<p class="small text-muted"><em>Designer de Interface e Front-end</em></p>
						<p class="mb-1">Luciana Nunes</p>
						<p class="small text-muted"><em>Designer de Interface e Interação</em></p>
						
						<span class="h6 mb-3 d-block">Recursos Audiovisuais</span>
						
						<p class="mb-1">Teo Venerando</p>
						<p class="small text-muted"><em>Edição audiovisual</em></p>
						
						<span class="h6 mb-3 d-block">Animação</span>

						<p class="mb-1">Bruno Athaydes</p>
						<p class="small text-muted"><em>Motion designer</em></p>
						<p class="mb-1">Rose Renovato</p>
						<p class="small text-muted"><em>Locutora</em></p>
											
						<span class="h6 mb-3 d-block">Recursos Educacionais</span>
						
						<p class="mb-1">Carmélia Brito</p>
						<p class="small text-muted"><em>Bibliotecária</em></p>
						<p class="mb-1">Natália Rasina</p>
						<p class="small text-muted"><em>Audiodescrição</em></p>
						<p class="mb-1">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisão de Português	</em></p>
						
						<span class="h6 mb-3 d-block">Suporte Técnico de Tecnologia da Informação</span>
					
						<p class="mb-1">Bruno Alexandre de Oliveira</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>
						<p class="mb-1">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Desenvolvedor</em></p>
						<p class="mb-1">Adriano Lourenço</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>
						<p class="mb-1">Orlando Terra</p>
						<p class="small text-muted"><em>Analista de tecnologias educacionais</em></p>
						<p class="mb-1">Fábio Carneiro</p>
						<p class="small text-muted"><em>Designer gráfico e web designer</em></p>
					</div>

					<span class="h5 mb-3 d-block">Instituto Nacional de Infectologia - INI/FIOCRUZ</span>
					
					<div class="mb-5">
						<p class="mb-1">Valdiléa Gonçalves Veloso dos Santos</p>
						<p class="small text-muted"><em>Diretora</em></p>

						<span class="h6 mb-3 d-block">Coordenadora geral</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="small text-muted"><em>Plataforma de Pesquisa Clínica INI/ Fiocruz</em></p>
						
						<span class="h6 mb-3 d-block">Coordenadores acadêmicos</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto </p>
						<p class="small text-muted"><em>Plataforma de Pesquisa Clínica INI/Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Conteudistas</span>

						<p class="small"><strong>Módulo 1 | Conceitos, histórico e diretrizes</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
						
						<p class=" small"><strong>Módulo 2 | Regulamentação e Fluxos de Tramitação</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Marcella Feitosa da Silva Barboza</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
						
						<p class="small"><strong>Moçambique</strong></p>
						
						<p class="mb-1">Alcina Zitha Tauancha</p>
						<p class="small text-muted"><em>Farmacêutica-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="mb-1">Anchelda Santinho Mulimela</p>
						<p class="small text-muted"><em>Revisão Linguistica-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>						
						
						<p class="mb-1">Igor Doby</p>
						<p class="small text-muted"><em>Médico-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>

						<p class="small"><strong>Módulo 3 | Atores em pesquisa clínica</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>

						<p class="mb-1">Ferão Américo Mandlate</p>
						<p class="small text-muted"><em>Psicólogo-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>

						<p class="mb-1">Jaciara Nissai Sallé Mussa</p>
						<p class="small text-muted"><em>Psicológa-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="mb-1">Yolanda Veronica Feliciano Manganhe</p>
						<p class="small text-muted"><em>Antropóloga-Centro de Investigação em Saúde da Polana Caniço (CISPOC)</em><br><em>Instituto Nacional de Saúde-Moçambique</em></p>
						
						<p class="small"><strong>Módulo 4 | Eventos adversos</strong></p>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto</p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Avaliação Final</span>
						
						<p class="mb-1">Jennifer Braathen Salgueiro</p>
						<p class="mb-1">Michelle Morata de Andrade</p>
						<p class="mb-1">Tiago Filgueiras Porto </p>
						<p class="small text-muted"><em>Tecnologista em Saúde Pública - INI/ Fiocruz</em></p>
					
						<span class="h6 mb-3 d-block">Revisores Técnicos</span>
						
						<p class="mb-1">Valdiléa Gonçalves Veloso dos Santos</p>
						<p class="small text-muted"><em>Diretora do Instituto Nacional de Infectologia Evandro Chagas - INI/FIOCRUZ</em></p>
					</div>
					
					<div class="">
						<p class="mb-1"><strong>A inclusão do conteúdo referente à regulamentação de Moçambique é resultado de uma parceria no âmbito do Programa Coopbras (Programa de Cooperação em Ensino e Pesquisa Internacional), apoiada pela Coordenação de Aperfeiçoamento de Pessoal de Nível Superior/Brasil/CAPES (código de financiamento 001)</strong></p>
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod1: {
		ariaLabel: 'bibliografiaMod1',
		modalSize: 'modal-lg',
		modalTitle: 'Bibliografia - Módulo 1',
		modalBody: `
			<div class="aba">
				<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
					<li class="nav-item" role="presentation">
						<button class="nav-link active" id="pills-mod1-aula1-tab" data-bs-toggle="pill" data-bs-target="#pills-mod1-aula1" type="button" role="tab" aria-controls="pills-mod1-aula1" aria-selected="true">Aula 1</button>
					</li>
					<li class="nav-item" role="presentation">
						<button class="nav-link" id="pills-mod1-aula2-tab" data-bs-toggle="pill" data-bs-target="#pills-mod1-aula2" type="button" role="tab" aria-controls="pills-mod1-aula2" aria-selected="false">Aula 2</button>
					</li>
				</ul>
				
				<div class="tab-content p-0" id="pills-tabContent">
					<!-- Aula 1 -->
					<div class="tab-pane fade show active" id="pills-mod1-aula1" role="tabpanel" aria-labelledby="pills-mod1-aula1-tab">
						<div class="row justify-content-center pt-5">
							<div class="col-12 col-md-10 col-lg-11">

								<div class="mb-5">
									<div class="list">
										<ul class="list-group">
											<li class="list-group-item" list-style="none">BRASIL. MINISTÉRIO DA SAÚDE. SECRETARIA DE VIGIL NCIA EM SAÚDE. DEPARTAMENTO DE ANÁLISE EM SAÚDE E VIGIL NCIA DE DOENÇAS NÃO TRANSMISSÍVEIS. <strong>Vigitel Brasil 2006-2021:</strong> vigilância de fatores de risco e proteção para doenças crônicas por inquérito telefônico: estimativas sobre frequência e distribuição sociodemográfica de morbidade referida e autoavaliação de saúde nas capitais dos 26 estados brasileiros e no Distrito Federal entre 2006 e 2021: morbidade referida e autoavaliação de saúde. Brasília: Ministério da Saúde, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigitel/vigitel-brasil-2006-2021-vigilancia-de-fatores-de-risco-e-protecao-para-doencas-cronicas-por-inquerito-telefonico.pdf' target='_blank'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigitel/vigitel-brasil-2006-2021-vigilancia-de-fatores-de-risco-e-protecao-para-doencas-cronicas-por-inquerito-telefonico.pdf</a>. Acesso em: 13 out. 2023.</li>

											<li class="list-group-item" list-style="none">BRASIL. MINISTÉRIO DA SAÚDE. SECRETARIA DE VIGIL NCIA EM SAÚDE. DEPARTAMENTO DE ANÁLISE EM SAÚDE E VIGIL NCIA DE DOENÇAS NÃO TRANSMISSÍVEIS. <strong>Vigitel Brasil 2006-2021:</strong> vigilância de fatores de risco e proteção para doenças crônicas por inquérito telefônico: estimativas sobre frequência e distribuição sociodemográfica de morbidade referida e autoavaliação de saúde nas capitais dos 26 estados brasileiros e no Distrito Federal entre 2006 e 2021: estado nutricional e consumo alimentar. Brasília: Ministério da Saúde, 2022. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/vigitel_brasil_2006-2021_estado_nutricional.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/vigitel_brasil_2006-2021_estado_nutricional.pdf</a>. Acesso em: 13 out. 2023.</li>

											<li class="list-group-item" list-style="none">COSTA, C.D.S.; FARIA, F.R.; GABE, K.T.; SATTAMINI, I.F.; KHANDPUR, N.; LEITE, F.H.M.; STEELE, E.M.; LOUZADA, M.L.D.C.; LEVY, R.B.; MONTEIRO, C.A. Escore Nova de consumo de alimentos ultraprocessados: descrição e avaliação de desempenho no Brasil. <strong>Revista de Saúde Pública</strong>, São Paulo, v. 55, n. 13, p. 1-10, 2021. </li>

											<li class="list-group-item" list-style="none">ELSAYED, N.A.; ALEPPO, G.; ARODA, V.R.; BANNURU, R.R.; BROWN, F.M.; BRUEMMER, D.; COLLINS, B.S.; HILLIARD, M.E.; ISAACS, D.; JOHNSON, E.L.; KAHAN, S.; KHUNTI, K.; LEON, J.; LYONS, S.K.; PERRY, M.L.; PRAHALAD, P.; PRATLEY, R.E.; SELEY, J.J.; STANTON, R.C.; GABBAY, R.A.; ON BEHALF OF THE AMERICAN DIABETES ASSOCIATION. 2. Classification and Diagnosis of Diabetes: Standards of Care in Diabetes-2023. <strong>Diabetes Care</strong>, Arlington, v. 46, n. Suppl 1, p. S19-S40, 2023.</li>

											<li class="list-group-item" list-style="none">FONTBONNE, A.; CESSE, E.; FREESE, E. Epidemiologia e classificação do diabetes mellitus. In: BANDEIRA, F.; MANCINI, M.; GRAF, H.; GRIZ, L.; FARIA, M.; LAZARETTI-CASTRO, M. (org.) <strong>Endocrinologia e Diabetes</strong>, 3. ed. Rio de Janeiro: Editora Medbook, 2015. p. 759-767.</li>

											<li class="list-group-item" list-style="none">GBD 2016 DALYs AND HALE COLLABORATORS. Global, regional, and national disability-adjusted life-years (DALYs) for 333 diseases and injuries and healthy life expectancy (HALE) for 195 countries and territories, 1990–2016: A systematic analysis for the Global Burden of Disease Study 2016. <strong>Lancet</strong>, London, v. 390, p. 1260-1344, 2017.</li>

											<li class="list-group-item" list-style="none">INTERNATIONAL DIABETES FEDERATION. <strong>IDF Diabetes Atlas</strong> 10th edition. 2021. <a href='https://diabetesatlas.org/' target='_blank'>https://diabetesatlas.org/</a> Acesso em: 11 out. 2023</li>

											<li class="list-group-item" list-style="none">MELO, S.P.D.S.C.; CESSE, E.A.P.; LIRA, P.I.C.; FERREIRA, L.C.C.D.N.; RISSIN, A.; BATISTA FILHO, M. Sobrepeso, obesidade e fatores associados aos adultos em uma área urbana carente do Nordeste Brasileiro. <strong>Revista Brasileira de Epidemiologia</strong>, São Paulo,v. 23, p. e200036, 2020.</li>

											<li class="list-group-item" list-style="none">NCD RISK FACTOR COLLABORATION (NCD-RisC). Trends in adult body-mass index in 200 countries from 1975 to 2014: a pooled analysis of 1698 population-based measurement studies with 19.2 million participants. <strong>Lancet</strong>, London, v. 387, n. 10026, p. 1377-1396, 2016.</li>

											<li class="list-group-item" list-style="none">REIS, R.C.P.D.; DUNCAN, B.B.; MALTA, D.C.; ISER, B.P.M.; SCHMIDT, M.I. Evolution of diabetes in Brazil: prevalence data from the 2013 and 2019 Brazilian National Health Survey. Cadernos de Saúde Pública, Rio de Janeiro, v. 38, n. Suppl 1, p. e00149321, 2022.</li>

											<li class="list-group-item" list-style="none">ROBINSON, T.N.; BANDA, J.A.; HALE, L.; LU, A.S.; FLEMING-MILICI, F.; CALVERT, S.L.; WARTELLA, E. Screen Media Exposure and Obesity in Children and Adolescents. <strong>Pediatrics</strong>, Springfield, v. 140, n. Suppl 2, p. S97-S101, 2017.</li>

											<li class="list-group-item" list-style="none">SOCIEDADE BRASILEIRA DE DIABETES. <strong>Diretrizes da Sociedade Brasileira de Diabetes</strong> 2017-2018. São Paulo: CLANNAD Editora Científica, 2017.</li>

											<li class="list-group-item" list-style="none">SOUZA, N.P.; CESSE, E.A.P.; FONTBONNE, A. Planeta, sociedades e humanidade em falência: um olhar à luz da comida e do comer. In: CAVALCANTI, J.S.B.; BUTTO, A.; AUBIN, . (org.) <strong>Globalização, segurança alimentar, feminismo e agroecologia.</strong> Brasília: CNPq, São Paulo: Annablume, 2022. p. 41-56.</li>

											<li class="list-group-item" list-style="none">WORLD OBESITY FEDERATION. <strong>World Obesity Atlas</strong> 2023. London: World Obesity, 2023. Disponível em: <a href='https://data.worldobesity.org/publications/?cat=19' target='_blank'>https://data.worldobesity.org/publications/?cat=19</a>. Acesso em: 26 set. 2023.</li>
										</ul>
									</div>
								</div>
								
								<div class="mb-5">
									<span class="h5 mb-3 d-block">Imagens da Web</span>
									
									
								</div>
								
							</div>
						</div>
					</div>

					<!-- Aula 2 -->
					<div class="tab-pane fade" id="pills-mod1-aula2" role="tabpanel" aria-labelledby="pills-mod1-aula2-tab">
						<div class="row justify-content-center pt-5">
							<div class="col-12 col-md-10 col-lg-11">

								<div class="mb-5">
									<div class="list">
										<ul class="list-group">
											<li class="list-group-item" list-style="none">BAHIA, L.R.; DA ROSA, M.Q.M.; ARAUJO, D.V.; CORREIA, M.G.; DOS ROSA, R.D.S.; DUNCAN, B.B.; TOSCANO, C.M. Economic burden of diabetes in Brazil in 2014. <strong>Diabetology & metabolic syndrome</strong>, London, v. 11, 54, 2019. Disponível em: <a href='https://dmsjournal.biomedcentral.com/articles/10.1186/s13098-019-0448-4' target='_blank'>https://dmsjournal.biomedcentral.com/articles/10.1186/s13098-019-0448-4</a>. Acesso em: 7 dez.2023</li>

											<li class="list-group-item" list-style="none">BODENHEIMER, T.; WAGNER, E.H.; GRUMBACH, K. Improving primary care for patients with chronic illness. <strong>Journal of the American Medical Association</strong>, Chicago, v. 288, n. 14, p. 1775-1779, 2002. Disponível em: <a href='BODENHEIMER, T.; WAGNER, E.H.; GRUMBACH, K. Improving primary care for patients with chronic illness. Journal of the American Medical Association, Chicago, v. 288, n. 14, p. 1775-1779, 2002. Disponível em: https://pubmed.ncbi.nlm.nih.gov/12365965/ . Acesso em: 7 dez.2023.' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/12365965/</a> . Acesso em: 7 dez.2023.</li>

											<li class="list-group-item" list-style="none">CESSE, E.A.P.; FONTBONNE, A.; FREESE, E.; DE SOUZA, W.V. <strong>Diabetes e hipertensão na atenção primária à saúde: reflexões, avanços e desafios.</strong> Recife: Editora UFPE, 2021. Disponível em: <a href='https://editora.ufpe.br/books/catalog/book/834' target='_blank'>https://editora.ufpe.br/books/catalog/book/834</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">COSTA, A.F.; FLOR, L.S.; CAMPOS, M.R.; OLIVEIRA, A.F.; COSTA, M.F.; SILVA, R.S.; LOBATO, L.C.; SCHRAMM, J.M. Burden of type 2 diabetes mellitus in Brazil. <strong>Cadernos de Saúde Pública</strong>, Rio de Janeiro, v. 33, n. 2, p. e00197915, 2017. Disponível em: DOI: <a href='https://www.scielo.br/j/csp/a/ThBcgyS737wVTCKk8Zm9TDM/?lang=en' target='_blank'>org/10.1590/0102-311X00197915</a>.  Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">EUROPEAN ASSOCIATION FOR THE STUDY OF THE LIVER (EASL), EUROPEAN ASSOCIATION FOR THE STUDY OF DIABETES (EASD), EUROPEAN ASSOCIATION FOR THE STUDY OF OBESITY (EASO). EASL-EASD-EASO Clinical Practice Guidelines for the management of non-alcoholic fatty liver disease. J<strong>ournal of Hepatology</strong>, Copenhagen, v. 64, n. 6, p. 1388-1402, 2016. Disponível em: DOI: 1<a href='0.1016/j.jhep.2015.11.004' target='_blank'>0.1016/j.jhep.2015.11.004</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">FONTBONNE, A. A síndrome de resistência à insulina e as complicações cardiovasculares do diabetes mellitus não insulino-dependente. <strong>Diabetes e Metabolismo</strong>, São Paulo, v. 1, p. 11-19, 1997.</li>

											<li class="list-group-item" list-style="none">FONTBONNE, A.; CESSE, E.; FREESE, E. Epidemiologia e classificação do diabetes mellitus. In: BANDEIRA, F.; MANCINI, M.; GRAF, H.; GRIZ, L.; FARIA, M.; LAZARETTI-CASTRO, M. (org.) <strong>Endocrinologia e Diabetes, 3. ed.</strong> Rio de Janeiro: Editora Medbook, 2015. p. 759-767.</li>

											<li class="list-group-item" list-style="none">GONCALVES, G.M.R.; SILVA, E.N.D. Cost of chronic kidney disease attributable to diabetes from the perspective of the Brazilian Unified Health System. <strong>PLoS One</strong>, San Francisco, v. 13, n. 10, p. e0203992, 2018. Disponível em: <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0203992' target='_blank'>https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0203992</a>. A cesso em: 7 dez. 2023</li>

											<li class="list-group-item" list-style="none">GREGG EW, SATTAR N, ALI MK. The changing face of diabetes complications. <strong>Lancet Diabetes Endocrinology</strong>, London, v. 4, n. 6, p. 537-547, 2016. Disponível em: doi: <a href='https://www.sciencedirect.com/science/article/abs/pii/S2213858716300109?via%3Dihub' target='_blank'>10.1016/S2213-8587(16)30010-9</a>. Acesso em: 7 dez 2023.</li>

											<li class="list-group-item" list-style="none">GURNEY, J.; STANLEY, J.; TENG, A.; KREBS, J.; KOEA, J.; LAO, C.; LAWRENSON, R.; MEREDITH, I.; SIKA-PAOTONU, D.; SARFATI, D. Cancer and diabetes co-occurrence: a national study with 44 million person-years of follow-up. <strong>PLoS One</strong>, San Francisco, v. 17, n. 11, p. e0276913, 2022. Disponível em: <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0276913' target='_blank'>https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0276913</a>. Acesso em: 7 dez 2023.</li>

											<li class="list-group-item" list-style="none">HERTH, J.; SIEVI, N.A.; SCHMIDT, F.; KOHLER, M. Effects of continuous positive airway pressure therapy on glucose metabolism in patients with obstructive sleep apnoea and type 2 diabetes: a systematic review and meta-analysis. European Respiratory Review, Copenhagen, v. 32, n. 169, p. 230083, 2023. Disponível em: DOI: <a href='https://err.ersjournals.com/content/32/169/230083' target='_blank'>10.1183/16000617.0083-2023</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">LUPPINO, F.S.; DE WIT, L.M.; BOUVY, P.F.; STIJNEN, T.; CUIJPERS, P.; PENNINX, B.W.; ZITMAN, F.G. Overweight, obesity, and depression: a systematic review and meta-analysis of longitudinal studies. <strong>Archives of General Psychiatry</strong>, Chicago, v. 67, n. 3, p. 220-229, 2010. Disponível em: doi: <a href='https://jamanetwork.com/journals/jamapsychiatry/fullarticle/210608' target='_blank'>10.1001/archgenpsychiatry.2010.2</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">MENDES, E.V. <strong>O cuidado das condições crônicas na atenção primária à saúde:</strong> o imperativo da consolidação da Estratégia da Saúde da Família. Brasília: Organização Pan-Americana da Saúde, 2012. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/cuidado_condicoes_atencao_primaria_saude.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/cuidado_condicoes_atencao_primaria_saude.pdf</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">NCD ALLIANCE, INTERNATIONAL DIABETES FEDERATION, WORLD HEART FEDERATION. <strong>Call for simultaneous action on diabetes and hypertension for more resilient health systems.</strong> Geneva: NCD Alliance, 2021. Disponível em: <a href='https://ncdalliance.org/resources/pressure-points-call-for-simultaneous-action-on-diabetes-and-hypertension-for-more-resilient-health-systems' target='_blank'>https://ncdalliance.org/resources/pressure-points-call-for-simultaneous-action-on-diabetes-and-hypertension-for-more-resilient-health-systems</a>. Acesso em: 1 dez. 2023.</li>

											<li class="list-group-item" list-style="none">REIS, R.C.P.D.; DUNCAN, B.B.; MALTA, D.C.; ISER, B.P.M.; SCHMIDT, M.I. Evolution of diabetes in Brazil: prevalence data from the 2013 and 2019 Brazilian National Health Survey. <strong>Cadernos de Saúde Pública</strong>, Rio de Janeiro, v. 38, suppl. 1, p. e00149321, 2022. Disponível em: <a href='https://www.scielo.br/j/csp/a/4YWtmtvQkgFm3mmQ4f7kxDr/?lang=en' target='_blank'>https://doi.org/10.1590/0102-311X00149321</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">SCHMIDT, M.I.; DUNCAN, B.B.; AZEVEDO E SILVA, G.; MENEZES, A.M.; MONTEIRO, C.A.; BARRETO, S.M.; CHOR, D.; MENEZES, P.R. Chronic non-communicable diseases in Brazil: burden and current challenges. <strong>Lancet</strong>, London, v. 377, n. 9781, p. 1949-1961, 2011. Disponível em: doi: <a href='https://www.sciencedirect.com/science/article/pii/S0140673611601359?via%3Dihub' target='_blank'>10.1016/S0140-6736(11)60135-9</a>. Acesso em: 7 dez, 2023.</li>

											<li class="list-group-item" list-style="none">SOCIEDADE BRASILEIRA DE DIABETES. <strong>Diretrizes da Sociedade Brasileira de Diabetes 2017-2018.</strong> São Paulo: CLANNAD Editora Científica, 2017. Disponível em: <a href='https://edisciplinas.usp.br/pluginfile.php/4925460/mod_resource/content/1/diretrizes-sbd-2017-2018.pdf' target='_blank'>https://edisciplinas.usp.br/pluginfile.php/4925460/mod_resource/content/1/diretrizes-sbd-2017-2018.pdf</a>. Acesso em: 7 dez, 2023.</li>

											<li class="list-group-item" list-style="none">SPICHLER, E.R.; SPICHLER, D.; LESSA, I.; COSTA E FORTI, A.; FRANCO, L.J.; LAPORTE, R.E. Capture-recapture method to estimate lower extremity amputation rates in Rio de Janeiro, Brazil. <strong>Pan American Journal of Public Health</strong>, Washington, v. 10, n. 5, p. 334-340, 2001. Disponível em: <a href='https://www.scielosp.org/pdf/rpsp/2001.v10n5/334-340/en' target='_blank'>https://www.scielosp.org/pdf/rpsp/2001.v10n5/334-340/en</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">TARGHER, G.; COREY, K.E.; BYRNE, C.D.; RODEN, M. The complex link between NAFLD and type 2 diabetes mellitus - mechanisms and treatments. <strong>Nature Reviews Gastroenterology & Hepatology</strong>, London, v. 18, n. 9, p. 599-612, 2021. Disponível em: doi: <a href='https://www.nature.com/articles/s41575-021-00448-y' target='_blank'>10.1038/s41575-021-00448-y</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">UK Prospective Diabetes Study (UKPDS) Group. Intensive blood-glucose control with sulfonylureas or insulin compared with conventional treatment and risk of complications in patients with type 2 diabetes (UKPDS 33) UK Prospective Diabetes Study (UKPDS) Group. <strong>Lancet</strong>, London, v. 352, n. 9131, p. 837-853, 1998. Disponível em: DOI:<a href='https://doi.org/10.1016/S0140-6736(98)07019-6' target='_blank'>https://doi.org/10.1016/S0140-6736(98)07019-6</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">UK Prospective Diabetes Study (UKPDS) Group. Effects of intensive blood-glucose control with metformin on complications in overweight patients with type 2 diabetes (UKPDS 34). <strong>Lancet</strong>, London, v. 352, n. 9131, p. 854-865, 1998. Disponível em: DOI: <a href='https://doi.org/10.1016/S0140-6736(98)07037-8' target='_blank'>https://doi.org/10.1016/S0140-6736(98)07037-8</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">UK Prospective Diabetes Study Group. Tight blood pressure control and risk of macrovascular and microvascular complications in type 2 diabetes: UKPDS 38. <strong>British Medical Journal</strong>, London, v. 317, n. 7160, p. 703-713, 1998. Disponível em: <a href='https://doi.org/10.1136/bmj.317.7160.703' target='_blank'>https://doi.org/10.1136/bmj.317.7160.703</a>. Acesso em: 7 dez. 2023.</li>

											<li class="list-group-item" list-style="none">WONG, N.D.; SATTAR, N. Cardiovascular risk in diabetes mellitus: epidemiology, assessment and prevention. <strong>Nature Reviews Cardiology</strong>, London, v. 20, n. 10, p. 685-695, 2023. Disponível em: doi: <a href='https://www.nature.com/articles/s41569-023-00877-z' target='_blank'>10.1038/s41569-023-00877-z</a>. Acesso em: 7 dez. 2023.</li>
										</ul>
									</div>
								</div>
								
								<div class="mb-5">
									<span class="h5 mb-3 d-block">Imagens da Web</span>
									
									
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		`,
	},
	bibliografiaMod2: {
			ariaLabel: 'bibliografiaMod2',
			modalSize: 'modal-lg',
			modalTitle: 'Bibliografia - Módulo 2',
			modalBody: `
				<div class="aba">
					<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="pills-mod2-aula1-tab" data-bs-toggle="pill" data-bs-target="#pills-mod2-aula1" type="button" role="tab" aria-controls="pills-mod2-aula1" aria-selected="true">Aula 1</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-mod2-aula2-tab" data-bs-toggle="pill" data-bs-target="#pills-mod2-aula2" type="button" role="tab" aria-controls="pills-mod2-aula2" aria-selected="false">Aula 2</button>
						</li>

						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-mod2-aula3-tab" data-bs-toggle="pill" data-bs-target="#pills-mod2-aula3" type="button" role="tab" aria-controls="pills-mod2-aula3" aria-selected="false">Aula 3</button>
						</li>

						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-mod2-aula4-tab" data-bs-toggle="pill" data-bs-target="#pills-mod2-aula4" type="button" role="tab" aria-controls="pills-mod2-aula4" aria-selected="false">Aula 4</button>
						</li>
					</ul>

					<div class="tab-content p-0" id="pills-tabContent">
						<!-- Aula 1 -->
						<div class="tab-pane fade show active" id="pills-mod2-aula1" role="tabpanel" aria-labelledby="pills-mod2-aula1-tab">
							<div class="row justify-content-center pt-5">
								<div class="col-12 col-md-10 col-lg-11">
									<div class="mb-5">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item" list-style="none">AMERICAN DIABETES ASSOCIATION et al. 5. Facilitating behavior change and well-being to improve health outcomes: standards of medical care in diabetes-2021. <strong>Diabetes care</strong>, v. 44, n. Suppl 1, p. S53-S72, 2021. Disponível em: <a href='https://doi.org/10.2337/dc21-S005' target='_blank'>https://doi.org/10.2337/dc21-S005</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">AMERICAN DIABETES ASSOCIATION; Standards of Medical Care in Diabetes - 2022 Abridged for Primary Care Providers. <strong>Clin Diabetes</strong>. v. 40, n.1, p. 10-38. January 2022. Disponível em: <a href='https://doi.org/10.2337/cd22-as01' target='_blank'>https://doi.org/10.2337/cd22-as01</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">BARRÉ, T. et al. Integrating nutrient bioavailability and co-production links when identifying sustainable diets: How low should we reduce meat consumption? <strong>PLoS One</strong>. v.13, n. 2, e0191767, Feb. 14, 2018. Disponível em: DOI: <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0191767' target='_blank'>10.1371/journal.pone.0191767</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">BISAN E. Exercício Físico e Diabetes. In: CONGRESSO DA SOCIEDADE BRASILEIRO DE DIABETES, 2022, 16-18 out. 2019. Natal (RN).  Disponível em: <a href='https://www.sbcbm.org.br/eventos-old/xxii-congresso-da-sociedade-brasileira-de-diabetes/' target='_blank'>https://www.sbcbm.org.br/eventos-old/xxii-congresso-da-sociedade-brasileira-de-diabetes/</a>. Acesso: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">CAMPOS, L.F. et al. Diretriz BRASPEN de Terapia Nutricional no Diabetes Mellitus.<strong> BRASPEN J</strong>, v. 35, Supl. 4, p.2-22. 2020. Disponível em: <a href='https://www.sbnpe.org.br/_files/ugd/66b28c_77ee5a91b6d14ade864fe0c091afde8c.pdf' target='_blank'>https://www.sbnpe.org.br/_files/ugd/66b28c_77ee5a91b6d14ade864fe0c091afde8c.pdf</a>. Acesso em 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">CHASSAING, B. et al. Dietary emulsifiers impact the mouse gut microbiota promoting colitis and metabolic syndrome. <strong>Nature</strong>. v. 519, n. 7541, p. 92-6, 2015. Disponível em: DOI: <a href='https://www.nature.com/articles/nature14232' target='_blank'>10.1038/nature14232</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">COLBERG, S.R. et al. Exercise and type 2 diabetes: the American College of Sports Medicine and the American Diabetes Association: joint position statement. <strong>Diabetes Care</strong>. v. 33, e147–e167. 2010. Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/21115758/' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/21115758/</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">COLBERG, S.R. Physical Activity/Exercise and Diabetes: A Position Statement of the American Diabetes Association. <strong>Diabetes Care</strong>. 2016;39(11):2065–79  Disponível em: <a href='https://doi.org/10.2337/dc16-1728' target='_blank'>https://doi.org/10.2337/dc16-1728</a>.  Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">CONLIN, P.R. et al. Department of Veterans Affairs/U.S. Department of Defense Clinical Practice Guideline: Management of Type 2 Diabetes Mellitus. <strong>Ann Intern Med</strong>. v.167, n. 9, 2017. Disponível em: DOI: <a href='https://www.acpjournals.org/doi/10.7326/M17-1362' target='_blank'>10.7326/M17-1362</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">FIELD, A.E.; COAKLEY, E.H.; MUST, A.; SPADANO, J.L.; LAIRD, N.; DIETZ, W.H.; ... & COLDITZ, G.A. Impact of overweight on the risk of developing common chronic diseases during a 10-year period. <strong>Archives of internal medicine</strong>, v. 161, n. 13, p. 1581-1586, 2001. Disponível em: DOI: <a href='https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/648604' target='_blank'>10.1001/archinte.161.13.1581</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">FRIER, B.M. Hypoglycaemia in diabetes mellitus: epidemiology and clinical implications. <strong>Nat Rev Endocrinol</strong>. 2014.. Disponível em: DOI: <a href='https://www.nature.com/articles/nrendo.2014.170' target='_blank'>10.1038/nrendo.2014.170</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">GOMES, A.T. et al. (org.) Ultraprocessados: soluções para sistemas alimentares saudáveis e sustentáveis. <strong>NUPENS USP</strong>. São Paulo, 2021. Disponível em: <a href='https://www.fsp.usp.br/nupens/wp-content/uploads/2021/06/Documento-Dia%CC%81logo-Ultraprocessados_PT.pdf' target='_blank'>https://www.fsp.usp.br/nupens/wp-content/uploads/2021/06/Documento-Dia%CC%81logo-Ultraprocessados_PT.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">GONDER-FREDERICK, L.A.; GRABMAN, J.H.; KOVATCHEV, B.; BROWN,  S.A.; PATEK STEPHEN, P.; BASU, A.; PINSKER, J.E.; Y KUDVA, O.C.; WAKEMAN, C.A.; DASSAU, E.Y.; COBELLI, C.; ZISSER, H.C.; DOYLE, F.J. Psychological Stress a Factor for Incorporation Into Future Closed-Loop Systems? J Diabetes Sci Technol. 2016; May 3;10(3):640-6.</li>

												<li class="list-group-item" list-style="none">HERMANNS, N.; EHRMANN, D.; SHAPIRA, A.; KULZER, B.; SCHMITT, A.; & LAFFEL, L. Coordination of glucose monitoring, self-care behaviour and mental health: achieving precision monitoring in diabetes. Diabetologia, 65(11), 1883-1894, 2022.</li>

												<li class="list-group-item" list-style="none">KNUTSON, K.L.; VAN CAUTER, E.; ZEE, P.; LIU, K.; LAUDERDALE, D.S. Cross-sectional associations between measures of sleep and markers of glucose metabolism among subjects with and without diabetes: the Coronary Artery Risk Development in Young Adults (CARDIA) Sleep Study. Diabetes Care. 2011; 34(5):1171–1176.</li>

												<li class="list-group-item" list-style="none">LERNER, A.; MATTHIAS, T. Changes in intestinal tight junction permeability associated with industrial food additives explain the rising incidence of autoimmune disease. Autoimmunity reviews. 2015;14(6):479-89.</li>

												<li class="list-group-item" list-style="none">MARTYN-NEMETHA, P.; QUINNA, L.; PENCKOFERB, S.; PARKA, C.; HOFERC, V.; BURKE, L. Fear of Hypoglycemia: Influence on Glycemic Variability and Self-Management Behavior in Young Adults with Type 1 Diabetes. <em>J Diabetes Complications</em>. 2017;31(4):735–741.</li>

												<li class="list-group-item" list-style="none">MICLOTTE, L.; VAN DE WIELE, T. Food processing, gut microbiota and the globesity problem. Critical Reviews in Food Science and Nutrition. 2020;60(11):1769-82.</li>

												<li class="list-group-item" list-style="none">NEFS GM, BAZELMANS E, DONGA E, TACK CJ, DE GALAN BE. Sweet dreams or bitter nightmare: a narrative review of 25 years of research on the role of sleep in diabetes and the contributions of behavioural science. Diabet Med. 2020; 37(3):418–426.</li>

												<li class="list-group-item" list-style="none">REUTRAKUL S, VAN CAUTER E. Interactions between sleep, circadian function, and glucose metabolism: implications for risk and severity of diabetes. Ann N Y Acad Sci. 2014; 1311:151–173.</li>

												<li class="list-group-item" list-style="none">REUTRAKUL S, THAKKINSTIAN A, ANOTHAISINTAWEE T. Sleep characteristics in type 1 diabetes and associations with glycemic control: systematic review and meta-analysis. Sleep Med. 2016; 23:26–45.</li>

												<li class="list-group-item" list-style="none">SILVA, L.A.L.B.D.; MELO, R.C.D.; ARAÚJO, B.C.D.; LUQUINE JÚNIOR, C.D.; DOMENE, F.M.; SILVA, J.D.L.D.; ... & BARRETO, J.O.M. Tratamento de diabetes mellitus tipo 2 na Atenção Primária à Saúde. Quais são as intervenções efetivas para o tratamento de adultos e idosos com diabetes mellitus tipo 2 na APS?Fiocruz, 2021.</li>

												<li class="list-group-item" list-style="none">SOUTO, D.L.; ROSADO, E.L. Contagem de Carboidratos no Diabetes Melito–Abordagem Teórica e Prática. Editora Rubio, 2010.</li>

												<li class="list-group-item" list-style="none">SOCIEDADE BRASILEIRA DE DIABETES (Brasil). Diretrizes da Sociedade Brasileira de Diabetes 2019-2020.(org.) <em><strong>In</strong></em>: Tratamento do diabetes mellitus: medidas de estilo de vida; Princípios gerais da orientação nutricional no diabetes mellitus. Bahia: Clannad Ed. Científica. 2020. Cap. 4, p. 97-129. Disponível em: <a href='https://www.saude.ba.gov.br/wp-content/uploads/2020/02/Diretrizes-Sociedade-Brasileira-de-Diabetes-2019-2020.pdf' target='_blank'>https://www.saude.ba.gov.br/wp-content/uploads/2020/02/Diretrizes-Sociedade-Brasileira-de-Diabetes-2019-2020.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">SOCIEDADE BRASILEIRA DE DIABETES (Brasil). Manual de contagem de carboidratos para pessoas com diabetes, 2016. 194 p. Disponível em: <a href='https://diabetes.org.br/wp-content/uploads/2021/05/manual-de-contagem-de-carbo.pdf' target='_blank'>https://diabetes.org.br/wp-content/uploads/2021/05/manual-de-contagem-de-carbo.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">U.S. DEPARTMENT OF VETERANS AFFAIRS. VA/DoD Clinical Practice Guideline for the Management of Type 2 Diabetes Mellitus In Primary Care. 2017;160.  Disponível em: <a href='https://www.healthquality.va.gov/guidelines/CD/diabetes/Vadoddmcpgfinal508.pdf' target='_blank'>https://www.healthquality.va.gov/guidelines/CD/diabetes/Vadoddmcpgfinal508.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">YARDLEY, J.E.; COLBERG, S.R. Update on management of type 1 diabetes and type 2 diabetes in athletes. <strong>Curr Sports Med Rep</strong>. 2017;16(1):38-44. Disponível em: DOI: <a href='https://journals.lww.com/acsm-csmr/fulltext/2017/01000/update_on_management_of_type_1_diabetes_and_type_2.13.aspx' target='_blank'>10.1249/JSR.0000000000000327</a></li>
											</ul>
										</div>
									</div>
									
									<div class="mb-5">
										<span class="h5 mb-3 d-block">Imagens da Web</span>
										
										
									</div>
									
								</div>
							</div>
						</div>
						<!-- Aula 2 -->
						<div class="tab-pane fade" id="pills-mod2-aula2" role="tabpanel" aria-labelledby="pills-mod2-aula2-tab">
							<div class="row justify-content-center pt-5">
								<div class="col-12 col-md-10 col-lg-11">

									<div class="mb-5">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item" list-style="none">AMERICAN DIABETES ASSOCIATION PROFESSIONAL PRACTICE COMMITTEE. Obesity and weight management for the prevention and treatment of type 2 diabetes: standards of medical care in diabetes—2022. <strong>Diabetes Care</strong>, v. 45, n. Supplement_1, p. S113-S124, 2022. Disponível em: <a href='https://diabetesjournals.org/care/article/45/Supplement_1/S113/138906/8-Obesity-and-Weight-Management-for-the-Prevention' target='_blank'>https://diabetesjournals.org/care/article/45/Supplement_1/S113/138906/8-Obesity-and-Weight-Management-for-the-Prevention</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">ANDRADE, R. S. Acesso à cirurgia bariátrica: do global ao local. 2023. Tese (Doutorado Acadêmico em Saúde Pública) – Instituto Aggeu Magalhães, Fundação Oswaldo Cruz, Recife, 2023.</li>

												<li class="list-group-item" list-style="none">BRASIL. Ministério da saúde. Portaria nº 424, de 19 de março de 2013. Redefine as diretrizes para a organização da prevenção e do tratamento do sobrepeso e obesidade como linha de cuidado prioritária da Rede de Atenção à Saúde das Pessoas com Doenças Crônicas. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt0424_19_03_2013.html' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt0424_19_03_2013.html</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">ELSAYED, N. A. et al. Obesity and weight management for the prevention and treatment of type 2 diabetes: standards of care in diabetes—2023. Diabetes care, v. 46, n. Supplement_1, p. S128-S139, 2023. Disponível em: <a href='https://diabetesjournals.org/care/article/46/Supplement_1/S128/148043/8-Obesity-and-Weight-Management-for-the-Prevention' target='_blank'>https://diabetesjournals.org/care/article/46/Supplement_1/S128/148043/8-Obesity-and-Weight-Management-for-the-Prevention</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">LINGVAY, I. et al. Obesity management as a primary treatment goal for type 2 diabetes: time to reframe the conversation. The Lancet, 2022. Disponível em: <a href='https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01919-X/fulltext' target='_blank'>https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01919-X/fulltext</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">PAJECKI, D.; RIZZOLLI, J.; BERTI, L.; ROSSONI, C. Guia  para  entender  o  tratamento  com  cirurgia bariátrica e metabólica. ABESO. 2022. Disponível em: <a href='https://abeso.org.br/wp-content/uploads/2022/04/Ebook-Cirurgia-Bariatrica_Abeso-1.pdf' target='_blank'>https://abeso.org.br/wp-content/uploads/2022/04/Ebook-Cirurgia-Bariatrica_Abeso-1.pdf</a>.  Acesso em: 20 maio 2024.</li>
											</ul>
										</div>
									</div>
									
									<div class="mb-5">
										<span class="h5 mb-3 d-block">Imagens da Web</span>
										
										
									</div>
									
								</div>
							</div>
						</div>

						<!-- Aula 3 -->
						<div class="tab-pane fade" id="pills-mod2-aula3" role="tabpanel" aria-labelledby="pills-mod2-aula3-tab">
							<div class="row justify-content-center pt-5">
								<div class="col-12 col-md-10 col-lg-11">

									<div class="mb-5">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item" list-style="none">ALMEIDA-PITITTO B. et al. <strong>Metas no tratamento do diabetes</strong>. Diretriz Oficial da Sociedade Brasileira de Diabetes (2022). Disponível em: DOI: 10.29327/557753.2022-3, ISBN: 978-65-5941-622-6. Disponível em: <a href='https://diretriz.diabetes.org.br/' target='_blank'>https://diretriz.diabetes.org.br/</a>. Acesso em: 05 jan. 2023. </li>

												<li class="list-group-item" list-style="none">BAHIA, L.; ALMEIDA-PITITTO, B. ; BERTOLUCI, M. <strong>Tratamento do diabetes mellitus tipo 2 no SUS</strong>. Diretriz Oficial da Sociedade Brasileira de Diabetes (2023). Disponível em: DOI: <a href='https://diretriz.diabetes.org.br/metas-no-tratamento-do-diabetes/' target='_blank'>10.29327/5238993.2023-11</a>, ISBN: 978-85-5722-906-8. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">LA BANCA, R. O. et al. <strong>Técnicas de aplicação de insulina</strong>. Diretriz Oficial da Sociedade Brasileira de Diabetes (2022). Disponível em: DOI: <a href='https://diretriz.diabetes.org.br/praticas-seguras-para-preparo-e-aplicac%cc%a7a%cc%83o-de-insulina/' target='_blank'>10.29327/557753.2022-4</a>, ISBN: 978-65-5941-622-6. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">BRASIL. Ministério da Saúde. Secretaria de Ciência, Tecnologia, Inovação e Insumos Estratégicos em Saúde. Departamento de Gestão e Incorporação de Tecnologias e Inovação em Saúde. <strong>Protocolo Clínico e Diretrizes Terapêuticas do Diabetes Melito tipo 1</strong>. Brasília: MS, 2020. Disponível em: <a href='http://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_terapeuticas_diabete_melito.pdf' target='_blank'>http://bvsms.saude.gov.br/bvs/publicacoes/protocolo_clinico_terapeuticas_diabete_melito.pdf</a>. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. Estratégias para o cuidado da pessoa com doença crônica : diabetes mellitus. Ministério da Saúde, Secretaria de Atenção à Saúde. <strong>Estratégias para o cuidado da pessoa com doença crônica Diabetes Mellitus</strong>. Brasília: MS. Cadernos de Atenção Básica, n. 36, 162 p. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/estrategias_cuidado_pessoa_diabetes_mellitus_cab36.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/estrategias_cuidado_pessoa_diabetes_mellitus_cab36.pdf</a>. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">BRASIL. Lei n.11.347, de 27 de setembro de 2006. Dispõe sobre a distribuição gratuita de medicamentos e materiais necessários à sua aplicação e à monitoração da glicemia capilar aos portadores de diabetes inscritos em programas de educação para diabéticos. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11347.htm' target='_blank'>https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2006/lei/l11347.htm</a>. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">BRASIL. Portaria n. 2.583 de Outubro de 2007. Define elenco de medicamentos e insumos disponibilizados pelo Sistema Único de Saúde, nos termos da Lei nº 11.347, de 2006, aos usuários portadores de diabetes mellitus. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2007/prt2583_10_10_2007.html' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2007/prt2583_10_10_2007.html</a>. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">CORRER, C. J.. Manual 3: diabetes em dia / Cassyano Januário Correr, Walleri Christi ni Torelli Reis. 1. ed. atualizada. Curitiba: Ed. Practice, 2016. 164 p. : il. (algumas color.) (Manual 3) ISBN 978-85-68784-03-7. Disponível em: <a href='https://www.passeidireto.com/arquivo/95842983/manual-3-diabetes-mellitus-1' target='_blank'>https://www.passeidireto.com/arquivo/95842983/manual-3-diabetes-mellitus-1</a>. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">ELSAYED, Nuha A. et al. 9. Pharmacologic Approaches to Glycemic Treatment: Standards of Care in Diabetes—2023. In: Diabetes Care. [s.l: s.n.]. v. 46p. S140–S157. Disponível em: DOI: <a href='https://diabetesjournals.org/care/article/46/Supplement_1/S140/148057/9-Pharmacologic-Approaches-to-Glycemic-Treatment' target='_blank'>10.2337/dc23-S009</a>. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">LYRA, Ruy; et al. Tratamento farmacológico da hiperglicemia no DM2. <em><strong>In:</strong></em> Diretriz Oficial da Sociedade Brasileira de Diabetes. [s.l: s.n.]. p. 50. Disponível em: DOI: <a href='https://diretriz.diabetes.org.br/manejo-da-terapia-antidiabetica-no-dm2/' target='_blank'>10.29327/557753.2022-10</a>. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">MELO, K.F.S. ; ALMEIDA-PITTITO, B. ; PEDROSA, H.C. Tratamento do Diabetes Mellitus Tipo 1 no SUS. Diretriz Oficial da Sociedade Brasileira de Diabetes, 2023.  Disponível em: DOI: <a href='https://diretriz.diabetes.org.br/tratamento-do-diabetes-mellitus-tipo-1-no-sus/' target='_blank'>10.29327/5238993.2023-12</a>, ISBN: 978-85-5722-906-8. Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">SOCIEDADE BRASILEIRA DE DIABETES. <strong>Diretrizes da Sociedade Brasileira de Diabetes 2019-2020</strong>. São Paulo: Editora Clannad; 2019. Disponível em: <a href='https://www.saude.ba.gov.br/wp-content/uploads/2020/02/Diretrizes-Sociedade-Brasileira-de-Diabetes-2019-2020.pdf' target='_blank'>https://www.saude.ba.gov.br/wp-content/uploads/2020/02/Diretrizes-Sociedade-Brasileira-de-Diabetes-2019-2020.pdf</a> . Acesso em: 05 jan. 2023.</li>

												<li class="list-group-item" list-style="none">SILVA JÚNIOR, W.S. et al. Insulinoterapia no diabetes mellitus tipo 1 (DM1). Diretriz Oficial da Sociedade Brasileira de Diabetes (2022). Disponível em: DOI: <a href='https://diretriz.diabetes.org.br/insulinoterapia-no-diabetes-mellitus-tipo-1-dm1/' target='_blank'>10.29327/557753.2022-5</a>, ISBN: 978-65-5941-622-6. Acesso em: 05/01/2023</li>
											</ul>
										</div>
									</div>
									
									<div class="mb-5">
										<span class="h5 mb-3 d-block">Imagens da Web</span>
										
										
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			`,
	},
	bibliografiaMod3: {
			ariaLabel: 'bibliografiaMod3',
			modalSize: 'modal-lg',
			modalTitle: 'Bibliografia - Módulo 3',
			modalBody: `
				<div class="aba">
					<ul class="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="pills-mod3-aula1-tab" data-bs-toggle="pill" data-bs-target="#pills-mod3-aula1" type="button" role="tab" aria-controls="pills-mod3-aula1" aria-selected="true">Aula 1</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-mod3-aula2-tab" data-bs-toggle="pill" data-bs-target="#pills-mod3-aula2" type="button" role="tab" aria-controls="pills-mod3-aula2" aria-selected="false">Aula 2</button>
						</li>

						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-mod3-aula3-tab" data-bs-toggle="pill" data-bs-target="#pills-mod3-aula3" type="button" role="tab" aria-controls="pills-mod3-aula3" aria-selected="false">Aula 3</button>
						</li>
					</ul>

					<div class="tab-content p-0" id="pills-tabContent">
						<!-- Aula 1 -->
						<div class="tab-pane fade show active" id="pills-mod3-aula1" role="tabpanel" aria-labelledby="pills-mod3-aula1-tab">
							<div class="row justify-content-center pt-5">
								<div class="col-12 col-md-10 col-lg-11">
									<div class="mb-5">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item" list-style="none">BRASIL. Ministério da Saúde. Secretaria de Atenção à Saúde. Documento de diretrizes para o cuidado das pessoas com doenças crônicas nas Redes de Atenção à Saúde e nas linhas de cuidado prioritárias. 34p. Brasília: Ministério da Saúde, 2012. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes%20_cuidado_pessoas%20_doencas_cronicas.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/diretrizes%20_cuidado_pessoas%20_doencas_cronicas.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">BRASIL. Ministério da Saúde. Portaria Nº 252/ GM de 19 de Fevereiro de 2013. Institui a Rede de Atenção à Saúde das Pessoas com Doenças Crônicas no âmbito do Sistema Único de Saúde (SUS). Brasília, 2013 .[ Revogada pela PRT GM/MS nº 483 de 01/04/2014]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt0252_19_02_2013.html' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt0252_19_02_2013.html</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">BRASIL. Ministério da Saúde. Portaria nº 483, de 1º de Abril de 2014. Redefine a Rede de Atenção à Saúde das Pessoas com Doenças Crônicas no âmbito do Sistema Único de Saúde (SUS) e estabelece diretrizes para a organização das suas linhas de cuidado. Brasília, 2014. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2014/prt0483_01_04_2014.html' target='_blank'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2014/prt0483_01_04_2014.html</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">BRASIL. Ministério da Saúde. Protocolo Clínico e Diretrizes Terapêuticas do  Diabete Melito Tipo 2. Brasília, DF: MS, 2020. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/pcdt/arquivos/2020/20201113_pcdt_diabete_melito_tipo_2_29_10_2020_final.pdf' target='_blank'>https://www.gov.br/saude/pt-br/assuntos/pcdt/arquivos/2020/20201113_pcdt_diabete_melito_tipo_2_29_10_2020_final.pdf</a>. Acesso em: 20 maio 2024</li>

												<li class="list-group-item" list-style="none">BRASIL. Ministério da Saúde. Linha de cuidado para o paciente com DM do ministério da saúde. Disponível em: <a href='https://linhasdecuidado.saude.gov.br/portal/diabetes-mellitus-tipo-2-(DM2)-no-adulto/processo-completo' target='_blank'>https://linhasdecuidado.saude.gov.br/portal/diabetes-mellitus-tipo-2-(DM2)-no-adulto/processo-completo</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">CESSE, EAP <em>et al</em>. Redes de Atenção à Saúde com ênfase na atenção às pessoas com hipertensão ou diabetes. <em><strong>In:</strong></em> Diabetes e hipertensão na atenção primária à saúde. Recife, Ed. UFPE, 2021. cap. 4, p. 121-145. Disponível em: <a href='https://editora.ufpe.br/books/catalog/view/834/838/2887' target='_blank'>https://editora.ufpe.br/books/catalog/view/834/838/2887</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">KOLB, L. An Effective Model of Diabetes Care and Education: The ADCES7 Self-Care BehaviorsTM. <strong>The Science of Diabetes Self-Management and Care</strong>. n,47, v. 1, p. 30-53, 2021. Disponível em:  DOI: <a href='https://journals.sagepub.com/doi/10.1177/0145721720978154' target='_blank'>10.1177/0145721720978154</a>. Acesso em:</li>

												<li class="list-group-item" list-style="none">MENDES, E.V. O cuidado das condições crônicas na atenção primária à saúde: o imperativo da consolidação da estratégia da saúde da família. Brasília: Organização Pan- Americana de Saúde, 2012. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/cuidado_condicoes_atencao_primaria_saude.pdf' target='_blank'>https://bvsms.saude.gov.br/bvs/publicacoes/cuidado_condicoes_atencao_primaria_saude.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">PORTELA, R. A. <em>et al</em>. Diabetes mellitus type 2: factors related to adherence to selfcare. Revista Brasileira de Enfermagem, v. 75, n. 4, p. e20210260, 2022. Disponível em: <a href='https://www.scielo.br/j/reben/a/pWf9cPCnswr7gDzSKxJr7SG/' target='_blank'>https://www.scielo.br/j/reben/a/pWf9cPCnswr7gDzSKxJr7SG/</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">SANTOS, R. S. A. F. Avaliação da implantação da Rede de Atenção à Saúde das pessoas com doenças crônicas em um distrito sanitário do município de Recife – Pernambuco. 2015. Dissertação (Mestrado Acadêmico em Saúde Pública) – Centro de Pesquisas Aggeu Magalhães, Fundação Oswaldo Cruz, Recife, 2015. Disponível em: <a href='https://www.arca.fiocruz.br/handle/icict/32026' target='_blank'>https://www.arca.fiocruz.br/handle/icict/32026</a>. Acesso em: 20 maio 2024.</li>
											</ul>
										</div>
									</div>
									
									<div class="mb-5">
										<span class="h5 mb-3 d-block">Imagens da Web</span>
										
										
									</div>
									
								</div>
							</div>
						</div>

						<!-- Aula 2 -->
						<div class="tab-pane fade" id="pills-mod3-aula2" role="tabpanel" aria-labelledby="pills-mod3-aula2-tab">
							<div class="row justify-content-center pt-5">
								<div class="col-12 col-md-10 col-lg-11">

									<div class="mb-5">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item" list-style="none">DOS REIS, R. C. P. <em>et al</em>. Control of glucose, blood pressure, and cholesterol among adults with diabetes: the Brazilian National Health Survey. <strong>Journal of Clinical Medicine</strong>, Basileia, v. 10, n. 15, p. 3428, 2021. DOI: 10.3390/jcm10153428. Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/34362211' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/34362211</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">GREGG, E.W. et al. Trends in cause-specific mortality among adults with and without diagnosed diabetes in the USA: an epidemiological analysis of linked national survey and vital statistics data. <strong>Lancet</strong>, Londres, v. 391, n. 10138, p. 2430-2440, 2018. DOI: 10.1016/S0140-6736(18)30314-3 Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/29784146/' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/29784146/</a>.  Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">HOLMAN, R. R. et al.10-year follow-up of intensive glucose control in type 2 diabetes. <strong>New England Journal of Medicine</strong>, Boston, v.  359, n. 15, p. 1577-1589, 2008. DOI: 10.1056/NEJMoa0806470. Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/18784090/' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/18784090/</a>. Acesso em : 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">PORTES, L.H.; MACHADO, C.V.; TURCI, S.R.B. Trajetória da política de controle do tabaco no Brasil de 1986 a 2016. <strong>Cadernos de Saúde Pública</strong>, Rio de Janeiro, v. 34, n. 2, p. e00017317, 2018. Disponível em: <a href='https://cadernos.ensp.fiocruz.br/ojs/index.php/csp/article/view/6809' target='_blank'>https://cadernos.ensp.fiocruz.br/ojs/index.php/csp/article/view/6809</a>. Acesso em : 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">SHAH, A.D. et al. Type 2 diabetes and incidence of cardiovascular diseases: a cohort study in 1·9 million people. <strong>Lancet Diabetes Endocrinology</strong>, Londres, v. 3, n. 2, p. 105-113, 2015. Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/25466521/' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/25466521/</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">THE EMERGING RISK FACTORS COLLABORATION. Diabetes mellitus, fasting glucose, and risk of cause-specific death. <strong>New England Journal of Medicine</strong>, Boston, v. 364, n. 9, p. 829-841, 2011. Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/21366474/' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/21366474/</a>. Acesso em: 20 maio 2024.</li>
											</ul>
										</div>
									</div>
									
									<div class="mb-5">
										<span class="h5 mb-3 d-block">Imagens da Web</span>
										
										
									</div>
									
								</div>
							</div>
						</div>

						<!-- Aula 3 -->
						<div class="tab-pane fade" id="pills-mod3-aula3" role="tabpanel" aria-labelledby="pills-mod3-aula3-tab">
							<div class="row justify-content-center pt-5">
								<div class="col-12 col-md-10 col-lg-11">

									<div class="mb-5">
										<div class="list">
											<ul class="list-group">
												<li class="list-group-item" list-style="none">AVALIAÇÃO, PREVENÇÃO E TRATAMENTO DO PÉ DIABÉTICO In: OLIVEIRA, J.E.P. de; MONTENEGRO JUNIOR, R.N.; VENCIO; S. (org.). <strong>Diretrizes da Sociedade Brasileira de Diabetes 2017-2018</strong>. São Paulo: CLANNAD Editora Científica, 2017. p. 273-287. Disponível em: <a href='https://edisciplinas.usp.br/pluginfile.php/4925460/mod_resource/content/1/diretrizes-sbd-2017-2018.pdf' target='_blank'>https://edisciplinas.usp.br/pluginfile.php/4925460/mod_resource/content/1/diretrizes-sbd-2017-2018.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">BORTOLI, J.Q.; SILBER, P.C.; PICETTI, E.; SILVA, C.F. da; PAKTER, H.M. Retinografia como forma de rastreio de retinopatia diabética em hospital terciário do Sistema Único de Saúde. <strong>Revista Brasileira de Oftalmologia</strong>, Internet, v. 81, p. e0057, 2022. Disponível em: <a href='https://doi.org/10.37039/1982.8551.20220057' target='_blank'>https://doi.org/10.37039/1982.8551.20220057</a> .Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">KIDNEY DISEASE: IMPROVING GLOBAL OUTCOMES. KDIGO 2012 clinical practice guideline for the evaluation and management of chronic kidney disease. <strong>Kidney International</strong>, New York, v. 3, n. suppl, p. 1-150, 2013. Disponível em: <a href='https://kdigo.org/wp-content/uploads/2017/02/KDIGO_2012_CKD_GL.pdf' target='_blank'>https://kdigo.org/wp-content/uploads/2017/02/KDIGO_2012_CKD_GL.pdf</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">NUFFIELD DEPARTMENT OF POPULATION HEALTH RENAL STUDIES GROUP; SGLT2 INHIBITOR META-ANALYSIS CARDIO-RENAL TRIALISTS' CONSORTIUM. Impact of diabetes on the effects of sodium glucose co-transporter-2 inhibitors on kidney outcomes: collaborative meta-analysis of large placebo-controlled trials. <strong>Lancet</strong>, London, v. 400, n. 10365, p. 1788-1801, 2022. Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/36351458/' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/36351458/</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">OLIVEIRA JUNIOR, P.P. de; CASTRO, F.A.G. de. Avaliação do rastreio de retinopatia diabética por meio de uma auditoria clínica em uma Unidade de Atenção Primária à Saúde rural no interior de Minas Gerais. <strong>Revista Brasileira de Medicina da Família e Comunidade</strong>, Internet, v. 17, n. 44, p. 3239, 2022. Disponível em : DOI: <a href='https://doi.org/10.5712/rbmfc17(44)3239' target='_blank'>https://doi.org/10.5712/rbmfc17(44)3239</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">PALMER, S.C. <em>et al</em>. Sodium-glucose cotransporter protein-2 (SGLT-2) inhibitors and glucagon-like peptide-1 (GLP-1) receptor agonists for type 2 diabetes: systematic review and network meta-analysis of randomised controlled trials. <strong>British Medical Journal</strong>, London, v. 372, p. 4573, 2021. Disponível em: <a href='https://pubmed.ncbi.nlm.nih.gov/33441402/' target='_blank'>https://pubmed.ncbi.nlm.nih.gov/33441402/</a>. Acesso em: 20 maio 2024.</li>

												<li class="list-group-item" list-style="none">ZOUNGAS, S. et al. Effects of intensive glucose control on microvascular outcomes in patients with type 2 diabetes: a meta-analysis of individual participant data from randomised controlled trials. <strong>Lancet Diabetes Endocrinology</strong>, London, v. 5, n. 6, p. 431-437, 2017. Disponível em: DOI: <a href='https://www.sciencedirect.com/science/article/abs/pii/S2213858717301043?via%3Dihub' target='_blank'>10.1016/S2213-8587(17)30104-3</a>. Acesso em: 20 maio 2024.</li>
											</ul>
										</div>
									</div>
									
									<div class="mb-5">
										<span class="h5 mb-3 d-block">Imagens da Web</span>
										
										
									</div>
									
								</div>
							</div>
						</div>

					</div>
				</div>
			`,
	},
	glossario: {
		ariaLabel: 'glossario',
		modalSize: 'modal-lg',
		modalTitle: 'Glossário',
		modalBody: `
			<div class="accordion accordion-flush" id="accordionExample2">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-a">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-a" aria-expanded="true" aria-controls="collapse1-a">A</button>
                    </h2>
                    <div id="collapse1-a" class="accordion-collapse collapse" aria-labelledby="heading1-a" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>Advergame</strong></p>
                            <p>O termo vem da fusão das palavras inglesas advertisement (publicidade) e game (jogo) e designa a estratégia de marketing que usa jogos eletrônicos como ferramentas para divulgar e promover marcas, produtos, ou organizações. Advergames incluem desde jogos exclusivamente desenvolvidos com fins publicitários até jogos diversos que contêm mensagens comerciais em sua interface.</p>

                            <p class="mb-3"><strong>Alimentos In Natura ou Minimamente Processados</strong></p>
                            <p>São alimentos obtidos diretamente de plantas ou de animais e que não sofrem qualquer alteração após deixarem a natureza ou que passam por processos mínimos como limpeza, remoção de partes não comestíveis, fracionamento, moagem, secagem, fermentação, pasteurização, refrigeração, congelamento e similares que não envolvem adição de sal, açúcar, óleos, gorduras ou outras substâncias. Exemplos incluem frutas, legumes, verduras, arroz, feijão, leite, carnes frescas e ovos.</p>
                            <p>Fonte: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf/view' target='_blank'>Guia Alimentar para a População Brasileira</a></p>

							<p class="mb-3"><strong>Alimentos Processados</strong></p>
                            <p>São produtos relativamente simples e antigos, fabricados com a adição de sal, açúcar ou outra substância culinária a um alimento in natura ou minimamente processado. Exemplos incluem conservas de legumes, frutas em calda, queijos e pães. Esses alimentos são frequentemente consumidos como parte de preparações culinárias e tendem a manter a identidade e a maioria dos nutrientes do alimento original, embora o processamento altere de modo desfavorável a composição nutricional.</p>
                            <p>Fonte: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf/view' target='_blank'>Guia Alimentar para a População Brasileira</a></p>

							<p class="mb-3"><strong>Alimentos Ultraprocessados</strong></p>
                            <p>Incluem produtos cuja fabricação envolve diversas etapas e técnicas de processamento e muitos ingredientes, incluindo substâncias de uso exclusivamente industrial. Esses alimentos são nutricionalmente desbalanceados, tendem a ser consumidos em excesso e a substituir alimentos in natura ou minimamente processados. Exemplos são biscoitos recheados, salgadinhos de pacote, refrigerantes e macarrão instantâneo.</p>
                            <p>Fonte: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf/view' target='_blank'>Guia Alimentar para a População Brasileira</a></p>

							<p class="mb-3"><strong>Ataque Isquêmico Transitório</strong></p>
                            <p>Acidente vascular cerebral (AVC) de curta duração e que regride totalmente sem deixar sequelas.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-b">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-b" aria-expanded="false" aria-controls="collapse1-b">B</button>
                    </h2>
                    <div id="collapse1-b" class="accordion-collapse collapse" aria-labelledby="heading1-b" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>Bomba de Infusão de Insulina</strong></p>
                            <p>Segundo a CONITEC, as bombas de insulina são pequenos aparelhos eletrônicos que administram a insulina por meio de um cateter, um tubo plástico fino que tem uma cânula flexível e é inserido na pele. O paciente carrega esse aparelho que libera insulina de forma programada: mediante doses pequenas e contínuas, ou conforme programado.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-c">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-c" aria-expanded="false" aria-controls="collapse1-c">C</button>
                    </h2>
                    <div id="collapse1-c" class="accordion-collapse collapse" aria-labelledby="heading1-c" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>Cetoacidose Diabética (CAD)</strong></p>
                            <p>É uma condição grave, caracterizada por aumento de corpos cetônicos, acidose metabólica, hiperglicemia e distúrbios hidroeletrolíticos que resultam da diminuição acentuada da insulinemia e do subsequente aumento de substâncias contrarreguladoras, como catecolaminas, glucagon, cortisol e hormônio do crescimento. O quadro clínico se caracteriza por mal-estar, vômitos, dor abdominal e hálito com cheiro de acetona. É uma emergência médica, pois pode levar a distúrbios de consciência e coma.</p>

							<p class="mb-3"><strong>Compostos Organossulfurados</strong></p>
                            <p>São compostos, normalmente orgânicos que contêm pelo menos uma ligação covalente carbono – enxofre.</p>
							<p>Fonte: <a href='https://pt.wikipedia.org/wiki/Composto_organossulfurado' target='_blank'>Wikipedia</a></p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-d">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-d" aria-expanded="false" aria-controls="collapse1-d">D</button>
                    </h2>
                    <div id="collapse1-d" class="accordion-collapse collapse" aria-labelledby="heading1-d" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>Densidades Tecnológicas</strong></p>
                            <p>Refere-se ao uso adequado da tecnologia e da ciência em interações entre profissionais e pacientes.</p>

							<p class="mb-3"><strong>Destruição Autoimune</strong></p>
                            <p>Ocorre quando o sistema imunológico começa a produzir anticorpos contra componentes internos, levando o corpo a atacar seus próprios tecidos.</p>

							<p class="mb-3"><strong>Dietas Hipocalóricas</strong></p>
                            <p>São dietas compostas por uma média de 20 a 25Kcal/Kg de peso por dia.</p>

							<p class="mb-3"><strong>Dietas Normocalóricas</strong></p>
                            <p>São dietas compostas por uma média de 28 a 30Kcal/Kg de peso por dia.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-e">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-e" aria-expanded="false" aria-controls="collapse1-e">E</button>
                    </h2>
                    <div id="collapse1-e" class="accordion-collapse collapse" aria-labelledby="heading1-e" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>Efeito Incretínico</strong></p>
                            <p>O efeito incretínico é a estimulação da secreção de insulina quando da entrada de alimentos no intestino.</p>

							<p class="mb-3"><strong>Evidência Científica</strong></p>
                            <p>Conjunto de informações que apresentam algum nível de prova com base nos métodos estabelecidos e aprovados pela ciência. Entretanto, nem todas as evidências têm a mesma força e nem todas elas embasam recomendações em saúde. Assim, antes de embasar qualquer prática, incluindo a prescrição de medicamentos, é essencial avaliar a qualidade da evidência.</p>
						
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-f">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-f" aria-expanded="false" aria-controls="collapse1-f">F</button>
                    </h2>
                    <div id="collapse1-f" class="accordion-collapse collapse" aria-labelledby="heading1-f" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>Fatores de Risco Modificáveis</strong></p>
                            <p>São aqueles elementos ou comportamentos presentes na vida de uma pessoa que podem ser alterados, controlados ou eliminados, e que estão associados a um aumento do risco de desenvolver determinadas doenças ou condições. Em outras palavras, são aspectos do estilo de vida ou do ambiente que podem ser modificados para reduzir a probabilidade de ocorrência de certas enfermidades.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-g">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-g" aria-expanded="false" aria-controls="collapse1-g">G</button>
                    </h2>
                    <div id="collapse1-g" class="accordion-collapse collapse" aria-labelledby="heading1-g" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>Glicemia Capilar</strong></p>
                            <p>Exame de sangue, coletado da ponta do dedo, que oferece resultado imediato acerca da concentração de glicose, por meio de um aparelho de glicemia.</p>

							 <p class="mb-3"><strong>Glicemia</strong></p>
                            <p>É a quantidade de glicose (açúcar) no sangue.</p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-h">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-h" aria-expanded="false" aria-controls="collapse1-h">H</button>
                    </h2>
                    <div id="collapse1-h" class="accordion-collapse collapse" aria-labelledby="heading1-h" data-bs-parent="">
                        <div class="accordion-body">
                            <p class="mb-3"><strong>HDL-colesterol</strong></p>
                            <p>Fração do colesterol ligada a proteínas de alta densidade (High Density Lipoproteins em inglês) que é conhecida popularmente como "o bom colesterol”. Ao contrário do LDL-colesterol (ligado a proteínas de baixa densidade, Low Density Lipoproteins em inglês), ela "protege" contra as doenças cardiovasculares.</p>

							<p class="mb-3"><strong>Hemoglobina Glicada (HbA1c)</strong></p>
                            <p>É uma forma de hemoglobina que se liga à glicose no sangue. A HbA1C é um exame que mede a média da concentração de glicose no sangue ao longo dos últimos dois a três meses. Esse teste é fundamental para o controle e monitoramento do diabetes, pois fornece uma visão geral do nível de controle glicêmico do paciente.</p>

							<p class="mb-3"><strong>Hipertensão</strong></p>
                            <p>Hipertensão arterial ou pressão alta é quando a medida da pressão se mantém frequentemente acima de 140 por 90 mmHg.</p>

							<p class="mb-3"><strong>Síndrome Plurimetabólica ou Síndrome Metabólica</strong></p>
                            <p>Caracterizada pela associação de fatores de risco para as doenças cardiovasculares (ataques cardíacos e derrames cerebrais), vasculares periféricas e diabetes.</p>

							<p class="mb-3"><strong>Hipercolesterolemia</strong></p>
                            <p>Elevação da taxa de colesterol no sangue.</p>

							<p class="mb-3"><strong>Hipererucemia</strong></p>
                            <p>Excesso de ácido úrico no sangue</p>

							<p class="mb-3"><strong>Hiperglicemia</strong></p>
                            <p>Níveis de açúcar elevados no sangue.</p>

							<p class="mb-3"><strong>Hipoglicemia severa</strong></p>
                            <p>Podemos classificar as hipoglicemias em três níveis: Nível 1: glicemia < 70 mg/dl, Nível 2: glicemia < 54 mg/dl e Nível 3: evento severo caracterizado por alteração do nível de consciência, torpor, convulsão, coma e requerendo assistência urgente para tratamento da hipoglicemia.</p>

							<p class="mb-3"><strong>Homeostase Glicêmica</strong></p>
                            <p>Tem como finalidade manter os níveis de açúcar (glicose) na corrente sanguínea dentro de taxas ideais. A homeostase glicêmica é crucial para prevenir condições como a hiperglicemia (níveis elevados de glicose no sangue) e a hipoglicemia (níveis baixos de glicose no sangue), ambas potencialmente perigosas.</p>
                        </div>
                    </div>
                </div>

				<div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-i">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-i" aria-expanded="false" aria-controls="collapse1-i">I</button>
                    </h2>
                    <div id="collapse1-i" class="accordion-collapse collapse" aria-labelledby="heading1-i" data-bs-parent="">
                        <div class="accordion-body">
							<p class="mb-3"><strong>Índice Glicêmico</strong></p>
                            <p>É o valor de glicemia após comermos determinado alimento.</p>

							<p class="mb-3"><strong>Infiltração Glomerular</strong></p>
                            <p>Indicador da função renal, normalmente maior que 90 mL/min/1,73m<sup>2</sup>.</p>

							<p class="mb-3"><strong>Insulina</strong></p>
                            <p>Hormônio que faz baixar a taxa de glicose no sangue, especialmente depois das refeições.</p>

						</div>
					</div>
				</div>

				<div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-l">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-l" aria-expanded="false" aria-controls="collapse1-l">L</button>
                    </h2>
                    <div id="collapse1-l" class="accordion-collapse collapse" aria-labelledby="heading1-l" data-bs-parent="">
                        <div class="accordion-body">
							<p class="mb-3"><strong>Lipoatrofia Insulínica</strong></p>
                            <p>Consiste em áreas localizadas de hiperestesia e depressão da pele devido à atrofia do tecido adiposo subcutâneo. Decorre da perda de gordura no local da injeção de insulina ou em sítios distantes, podendo ser concomitante a áreas de hipertrofia. Sua prevalência é maior em jovens do sexo feminino e geralmente se desenvolve entre três e seis meses após o início da insulinoterapia.</p>

							<p class="mb-3"><strong>Lipodistrofia Hipertrófica</strong></p>
                            <p>Consiste em áreas tumefeitas e localizadas nas regiões onde os pacientes aplicam repetidamente a insulina. São possivelmente decorrentes do efeito anabolizante da insulina, o que é visto particularmente em homens. Essas áreas correspondem a massas fibrosas hipovasculares, que ocasionam absorção errática e incompleta de insulina, levando a uma piora no controle metabólico. Muitas vezes, são hipoanestésicas, levando o paciente a usar o local repetidamente e, assim, perpetuando o processo. A hipertrofia pode regredir lentamente trocando-se a insulina por preparações mais purificadas e evitando a aplicação nesses locais por alguns meses.</p>
						</div>
					</div>
				</div>

				<div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-o">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-o" aria-expanded="false" aria-controls="collapse1-o">O</button>
                    </h2>
                    <div id="collapse1-o" class="accordion-collapse collapse" aria-labelledby="heading1-o" data-bs-parent="">
                        <div class="accordion-body">
							<p class="mb-3"><strong>Óleos, Gorduras, Sal e Açúcar</strong></p>
                            <p>Esta categoria inclui produtos extraídos de alimentos in natura ou diretamente da natureza e usados para temperar e cozinhar alimentos e criar preparações culinárias. Eles são utilizados com moderação para diversificar e tornar mais saborosa a alimentação sem torná-la nutricionalmente desbalanceada.</p>
							<p>Fonte: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-brasil/publicacoes-para-promocao-a-saude/guia_alimentar_populacao_brasileira_2ed.pdf/view' target='_blank'>Guia Alimentar para a População Brasileira</a></p>
						</div>
					</div>
				</div>

				<div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-p">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-p" aria-expanded="false" aria-controls="collapse1-p">P</button>
                    </h2>
                    <div id="collapse1-p" class="accordion-collapse collapse" aria-labelledby="heading1-p" data-bs-parent="">
                        <div class="accordion-body">
							<p class="mb-3"><strong>Polidipsia</strong></p>
                            <p>Ingestão excessiva de água.</p>

							<p class="mb-3"><strong>Poliúria</strong></p>
                            <p>Eliminação excessiva de urina.</p>

							<p class="mb-3"><strong>Pressão Arterial</strong></p>
                            <p>É medida em milímetros de mercúrio (mmHg). O primeiro valor corresponde à pressão arterial sistólica (quando o coração pulsa o sangue na circulação) e o segundo valor à pressão arterial diastólica (quando o coração relaxa).</p>

							<p class="mb-3"><strong>Prevenção Primária</strong></p>
                            <p>Prevenção em pessoas que ainda não sofreram complicações cardiovasculares ateroscleróticas agudas, como infarto do miocárdio ou AVC.</p>
						</div>
					</div>
				</div>

				<div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-r">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-r" aria-expanded="false" aria-controls="collapse1-r">R</button>
                    </h2>
                    <div id="collapse1-r" class="accordion-collapse collapse" aria-labelledby="heading1-r" data-bs-parent="">
                        <div class="accordion-body">
							<p class="mb-3"><strong>Regime de Insulina Basal-Bolus</strong></p>
                            <p>Rotina que envolve tomar uma forma de insulina de ação mais longa para manter os níveis de glicose no sangue estáveis durante períodos de jejum e injeções separadas de insulina de ação mais curta para evitar aumentos nos níveis de glicose no sangue resultantes das refeições. </p>
							<p>Fonte: <a href='https://www.diabetes.co.uk/insulin/basal-bolus.html' target='_blank'>Diabetes.co.uk</a></p>

							<p class="mb-3"><strong>Resistência Insulínica</strong></p>
                            <p>Redução da resposta das células do fígado ou do músculo ao efeito da insulina, cujo papel é fazer entrar a glicose dentro das células, assim diminuindo a glicemia (quantidade de glicose na corrente sanguínea).</p>
						</div>
					</div>
				</div>

				<div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-s">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-s" aria-expanded="false" aria-controls="collapse1-s">S</button>
                    </h2>
                    <div id="collapse1-s" class="accordion-collapse collapse" aria-labelledby="heading1-s" data-bs-parent="">
                        <div class="accordion-body">
							<p class="mb-3"><strong>Síndrome de Dumping</strong></p>
                            <p>Conjunto de sintomas ocasionados pela passagem rápida de alimentos do estômago para o intestino, principalmente aqueles com grandes concentrações de gordura e/ou açúcares.</p>

							<p class="mb-3"><strong>Sistemas Alimentares</strong></p>
                            <p>Envolvem todos os processos relacionados à alimentação - desde a produção, o processamento e a distribuição de um alimento, até sua preparação e consumo.</p>
						</div>
					</div>
				</div>

				<div class="accordion-item">
                    <h2 class="accordion-header" id="heading1-t">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-t" aria-expanded="false" aria-controls="collapse1-t">T</button>
                    </h2>
                    <div id="collapse1-t" class="accordion-collapse collapse" aria-labelledby="heading1-t" data-bs-parent="">
                        <div class="accordion-body">
							<p class="mb-3"><strong>Transição Nutricional</strong></p>
                            <p>Mudanças globais na dieta e na atividade física observadas a partir do fim da Segunda Guerra Mundial: alimentos mais abundantes, mais acessíveis e mais variados, forte redução da despesa energética "espontânea" ligada às necessidades cotidianas do trabalho, dos deslocamentos ou da vida doméstica.</p>
						</div>
					</div>
				</div>
            </div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');

document.addEventListener('DOMContentLoaded', function (event) {
	//do work

	modalButtons.forEach(btn => {
		// Check if the modal exist
		const modalId = btn.getAttribute('data-bs-target').slice(1);

		const createdModalId = document.getElementById(modalId);

		if (!createdModalId) {
			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement('div');
	const modalLabel = id.slice(6);

	newModal.classList.add('modal', 'fade');
	newModal.setAttribute('id', id);
	newModal.setAttribute('tabindex', '-1');
	newModal.setAttribute('aria-labelledby', modalLabel);
	newModal.setAttribute('aria-hidden', 'true');

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="fio-button fio-button-primary" data-bs-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}
