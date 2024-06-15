import React from 'react'
import "./CreatorInfo.css"

const CreatorInfo = () => {
    const textP1 = "Zugang zu deinem eigenen E-Mail-Postfach, wodurch du jeden Austausch mit Kunden nachverfolgen kannst. Außerdem bin ich deine Ansprechpartnerin für alle Angelegenheiten und 24/7 für dich erreichbar. Damit du deine Termine im Überblick hast, kannst du jederzeit in deinem für dich alleine angelegten Kalender reinschauen."
    const textP2 = "Durch meinen juristischen Studienabschluss sorge ich dafür̈r, dass du in allen rechtlichen Angelegenheiten immer auf der sicheren Seite bist. Dazu gehört es auch, alle Vertragsdokumente vor Unterzeichnung zu kontrollieren. Selbstverständlich ist ein Impressum inbegriffen."
    const textP3 = "Wir wollen, dass du Spaß an deiner Arbeit hast, daher ist uns ein familiärer Umgang sehr wichtig. Du kannst jederzeit mit uns sprechen, für Anregungen und Feedback sind wir immer offen."
    const textP4 = "Die Zeit ist schnelllebig, Trends sind innerhalb von paar Tagen nicht mehr aktuell. Es ist wichtig, mit der Zeit mitzugehen und daherarbeiten immer mehr Firmen mit Content Creator zusammen. Werbung ist nicht gleich Werbung. Wir helfen dabei nicht nur Trends zusuchen, sondern sie auch zu setzen!"
    const textP5 = "Es ist wichtig, ideale Werbebotschafter zu finden, denn diese widerspiegeln am Ende eure Brand. Dabei kommt es nicht nur auf dieFollower Zahl an, es spielen viel mehr Aspekte hier mit."
    const textP6 = "Zudem konzentrieren wir uns auch auf eure Kampagnen Planungen. Dabei ist es wichtig, nicht nur ideale Content Creator zu finden,sondern auch eine harmonische Zusammenarbeit zwischen Influencer und Brand. Wir sind darauf spezialisiert, Kampagnen mit zugestalten und die strategische Vermarktung in allen Social Media Kanälen zu managen."
    
    const tempTextP1 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ame"
    const tempTextP2 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lore"
    const tempTextP3 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et jus"
    const tempTextP4 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    const tempTextP5 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et ju"
    const tempTextP6 = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur "
    
    return (
        <div className='creator-info-container'>
            <div className='content'>
                <div className='bg' />
                <h4>Wissenswert für Creator</h4>
                <h5>Völlige Transparenz</h5>
                <p>{tempTextP1}</p>

                <h5>Rechtliche Sicherheit</h5>
                <p>{tempTextP2}</p>

                <h5>Familiärer Umgang</h5>
                <p>{tempTextP3}</p>

                <h4 className='title'>Wissenswert für Brands</h4>
                <h5>Trends Suche</h5>
                <p>{tempTextP4}</p>

                <h5>Werbebotschafter</h5>
                <p>{tempTextP5}</p>

                <h5>Strategische Unterstützung</h5>
                <p>{tempTextP6}</p>
            </div>
        </div>
    )
}

export default CreatorInfo