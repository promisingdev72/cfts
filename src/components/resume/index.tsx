
import Image from "next/image"
import images from '~/images'

export default function Resume(){
    const {video} = images
    return(
        <>
            <div>
                <p className="text-color2 font-bold md:text-3xl text-2xl">
                    Résumé du projet :
                </p>
                <p className="text-color1 md:text-xl text-lg">
                    We have seen the rise of mandatory approaches to corporate accountability in recent years. This reflects a growing understanding that the voluntary approach to regulating cross-border corporate activities through codes of conduct and multi-stakeholder initiatives has not addressed pressing issues concerning labour, the environment and/or integrity. The French corporate vigilance law enacted in 2017 stands out as the first legislation mandating human rights due diligence and remediation mechanisms for corporate activities covering global supply chains.
                    In this research project, we focus on the intersection between the French vigilance law and transnational social dialogue, Global Framework Agreements (GFAs). Specifically, we ask the following research questions: <br/><br/>

                    Q1. How do mandatory due diligence legislation and social dialogue intersect? Do they compete, complement one another or remain separate? <br/><br/>

                    Q2. How does the legislation influence the role and power balance among stakeholders, such as trade unions as well as functional departments?<br/><br/>

                    Q3. What explains the differences (if any) across companies? <br/><br/>

                    This study seeks to answer these questions by drawing on rich qualitative data collected through three waves of interviews in 2017, 2019, and 2022. As cases, we have selected five French multinational corporations with GFAs, which signal their prior commitment to social dialogue. Leveraging longitudinal data covering various stakeholders, we explore how social dialogue and the role of unions have shaped or been shaped by the implementation of the duty of vigilance law. <br/><br/>

                    By delving into the hitherto neglected relationship between mandatory due diligence legislation and social dialogue, we seek to contribute to the literature on public/private regulation, industrial relations as well as organization studies. We explore the complementarity of instruments (or lack thereof) from organizational as well as stakeholder perspectives. Shedding light on the relative strengths and weaknesses of unions as partners to implementing mandatory due diligence should have important policy implications as well. <br/><br/>
                </p>
            </div>
            <div>
                <p className="text-color2 font-bold md:text-3xl text-2xl">
                    Les publications associées :  
                </p>
                <p className="text-color1 font-bold md:text-xl text-lg">
                    Rapports de Recherche 
                </p>
                <p className="text-color1 md:text-xl text-lg">
                    Barraud de Lagerie, P., Béthoux, E., Bourguignon, R., Mias, A. Penalva-Icher, E.. 2020. Mise en œuvre de la Loi sur le devoir de vigilance. Rapport sur les premiers plans adoptés par les entreprises. Rapport remis au Bureau international du Travail à Genève.<br/><br/>
                    Bourguignon R., Mias, A. (coord.)., 2017, Les accords-cadres internationaux : étude comparative des ACI conclus par les entreprises françaises, Rapport à destination du bureau de l’OIT pour la France .<br/><br/>
                </p>
                <p className="text-color1 font-bold md:text-xl text-lg">
                    Publications Scientifiques 
                </p>
                <p className="text-color1 md:text-xl text-lg">
                    Ashwin, S., Oka, C., Schuessler, E., Alexander, R., & Lohmeyer, N. 2020. Spillover effects across transnational industrial relations agreements: The potential and limits of collective action in global supply chains. Ilr Review, 73(4), 995-1020.<br/><br/>
                    Bourguignon, R., Garaudel, P., Porcher, S. 2021. Global Framework Agreements and Trade Unions as Monitoring Agents in Transnational Corporations. Journal of Business Ethics 165, pp. 517–533.<br/><br/>
                    Bourguignon R., Marc-Antonin Hennebert. 2021. “Construire un dialogue social transnational : une analyse processuelle de l’effectivité des Accords-Cadres Internationaux » in Delautre G, Echeverría Manrique E. & Fenwick C. Le travail décent dans une économie mondialisée Quelques leçons des initiatives publiques et privées, Organisation Internationale du Travail.<br/><br/>
                    Oka, C. 2016. Improving working conditions in garment supply chains: The role of unions in Cambodia. British journal of industrial relations, 54(3), 647-672.<br/><br/>
                    Oka, C., Egels‐Zandén, N., & Alexander, R. 2020. Buyer engagement and labour conditions in global supply chains: The Bangladesh accord and beyond. Development and change, 51(5), 1306-1330.<br/><br/>
                </p>
            </div>
            <div>
                <Image src={video}/>
            </div>
        </>
    )
}