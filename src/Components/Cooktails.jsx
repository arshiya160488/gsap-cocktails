import { useGSAP } from "@gsap/react"
import { cocktailLists } from "../../constants"
import gsap from "gsap"

function Cooktails() {
    useGSAP(() => {
        const paralaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        }).from('#c-left-leaf', {
            x: -100, y: 100,
        })
            .from('#c-right-leaf', {
                x: 100, y: 100,

            })


    })
    return (
        <section id="cocktails">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most Popular cokctails:</h2>

                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most loved cokctails:</h2>

                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3>{name}</h3>
                                    <p>{country} | {detail}</p>
                                </div>
                                <span>- {price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cooktails
