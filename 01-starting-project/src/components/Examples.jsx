import { EXAMPLES } from "../data.js"
import TabButton from "./TabButton.jsx"
import { useState } from 'react';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
    }
    return (
        <Section title='Examples' id="examples">
            <Tabs
            ButtonsContainer="menu"
            buttons={    
            <>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
            </>
            }>
                {!selectedTopic ? <p>Please select a topic.</p> :
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                    </div>
                }
            </Tabs>
        </Section>
    );
}