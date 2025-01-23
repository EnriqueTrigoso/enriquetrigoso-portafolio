import React from 'react'

type Renderers = {
    [key: string]: (text: string) => React.ReactNode;
};

const RichText = (text: string, renderers: Renderers): React.ReactNode => {

    const modifiedText = text.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '<br />');
    const regex = /<(\w+)[^>]*>(.*?)<\/\1>|<br\s*\/?>/gi;

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    modifiedText.replace(regex, (match, tag, content, offset) => {

        if (offset > lastIndex) {
            parts.push(
                <React.Fragment key={`text-${lastIndex}`}>
                    {modifiedText.slice(lastIndex, offset)}
                </React.Fragment>
            );
        }

        if (tag) {

            if (renderers[tag]) {
                parts.push(
                    <React.Fragment key={`tag-${offset}`}>
                        {renderers[tag](content)}
                    </React.Fragment>
                );
            } else {

                parts.push(
                    <React.Fragment key={`plain-${offset}`}>
                        {content}
                    </React.Fragment>
                );
            }
        } else if (match.startsWith('<br')) {

            if (renderers['br']) {
                parts.push(
                    <React.Fragment key={`br-${offset}`}>
                        {renderers['br']('')}
                    </React.Fragment>
                );
            } else {
                parts.push(
                    <React.Fragment key={`br-${offset}`}>
                        <br />
                    </React.Fragment>
                );
            }
        }

        lastIndex = offset + match.length;
        return match;
    });

    if (lastIndex < modifiedText.length) {
        parts.push(
            <React.Fragment key={`text-${lastIndex}`}>
                {modifiedText.slice(lastIndex)}
            </React.Fragment>
        );
    }

    return <>{parts}</>;
};

export default RichText;