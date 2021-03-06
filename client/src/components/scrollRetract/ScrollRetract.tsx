import React, {useRef, useLayoutEffect} from 'react';

interface ScrollMessagesProps {
    onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
    className?: string;
    readonly whenChanged: any[];
}

interface PrevScrollPos {
    scrollTop: number;
    clientHeight: number;
    scrollHeight: number;
}

const ScrollRetract: React.FC<ScrollMessagesProps> = (props) => {
    const { children, className, whenChanged} = props;
    const messagesContainer = useRef<HTMLDivElement>(null);
    const prevScrollPos = useRef<PrevScrollPos | null>(null);

    useLayoutEffect(() => {
        const prevFromBottom = getPxFromBottom(prevScrollPos.current);

        if (prevFromBottom < 200) {
            scrollToBottom(messagesContainer.current);
        } else {
            //remain from previous position
            if (messagesContainer.current && prevScrollPos.current) {
                goToPrevPos(messagesContainer.current, prevScrollPos.current)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, whenChanged);

    const setPrevPos = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        prevScrollPos.current = {
            scrollTop: e.currentTarget.scrollTop,
            clientHeight: e.currentTarget.clientHeight,
            scrollHeight: e.currentTarget.scrollHeight 
        }
    }

    const handleScrolling = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        setPrevPos(e);
        if (props.onScroll) {
            props.onScroll(e);
        } 
    }

    const getPxFromBottom = (e) => {
        if (e) {
            //Refer to https://javascript.info/article/size-and-scroll/metric-all.svg for visuals
            return e.scrollHeight - (e.scrollTop + e.clientHeight);
        }
        return 0;
    }
    
    const goToPrevPos = (el: HTMLDivElement, prevPos: PrevScrollPos) => {
        el.scrollTop = (el.scrollHeight - prevPos.scrollHeight) + prevPos.scrollTop;
    }

    const scrollToBottom = (el: HTMLDivElement | null) => {
        if (el) {
            setTimeout(() => {
                el.scroll({
                    top: el.scrollHeight,
                    behavior: "smooth"
                })
            }, 500)
        }
    }

    return (
        <div 
            className={className}
            ref={messagesContainer}
            onScroll={handleScrolling}
        >
            {children}
        </div>
    )
}

export default ScrollRetract;