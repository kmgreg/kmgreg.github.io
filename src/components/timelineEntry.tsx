import { timelineEntryProps } from "../types"

export default function TimelineEntry (props: timelineEntryProps) {

    const listyle = {
        width: '400px'
    }

    const textBlockStyle = {
        margin: '25px 25px 100px 25px',
        TextWrap: 'wrap'
    }

    return <li className={'timelineEntry textblockContainer ' + props.blockAlignment} style={listyle}>
        <article>
            <header>
                <h1>{props.header}</h1>
                <h3>{props.date}</h3>
            </header>
            <p style={textBlockStyle}>{props.contents}</p>
        </article>
    </li>
}