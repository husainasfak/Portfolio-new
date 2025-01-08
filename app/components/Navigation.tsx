import { Home, NotebookText, SquareLibrary } from "lucide-react";
import {
    motion,
    useMotionValue,
    MotionValue,
    useTransform,
    useSpring,
    AnimatePresence,
} from "motion/react";

import { useRef, useState } from "react";

type Link = {
    title: string;
    icon: React.ReactNode;
    href: string;
};

const FloatingDockCore = () => {
    const links: Link[] = [
        {
            title: "Home",
            icon: <Home className="h-full w-full text-white" />,
            href: "",
        },
        {
            title: "Blogs",
            icon: <SquareLibrary className="h-full w-full text-white" />,
            href: "/blogs",
        },
        {
            title: "Notes",
            icon: <NotebookText className="h-full w-full text-white" />,
            href: "/notes",
        },
    ];
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className="fixed bottom-6 inset-x-0 mx-auto flex items-center justify-center bg-black/85 gap-4 w-fit px-4 rounded-lg h-12"
        >
            {links.map((el) => {
                return <IconContainer el={el} key={el.title} mouseX={mouseX} />;
            })}
        </motion.div>
    );
};

export const IconContainer = ({
    el,
    mouseX,
}: {
    el: Link;
    mouseX: MotionValue<number>;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const distance = useTransform(mouseX, (val) => {
        const bounds = ref?.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-100, 0, 100], [20, 40, 20]);
    const heightTransfrom = useTransform(distance, [-100, 0, 100], [20, 40, 20]);

    const widthIconTransform = useTransform(distance, [-80, 0, 80], [15, 30, 15]);
    const heightIconTransfrom = useTransform(
        distance,
        [-80, 0, 80],
        [15, 30, 15]
    );

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const height = useSpring(heightTransfrom, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const heightIcon = useSpring(heightIconTransfrom, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const widthIcon = useSpring(widthIconTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hoverd, setHoverd] = useState(false);
    return (
        <a
            href={el.href}
            onMouseEnter={() => setHoverd(true)}
            onMouseLeave={() => setHoverd(false)}
        >
            <motion.div
                ref={ref}
                style={{
                    width,
                    height,
                }}
                className="flex relative items-center justify-center h-8 rounded-md gap-2"
            >
                <AnimatePresence>
                    {hoverd && (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 10,
                                x: "-50%",
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                x: "-50%",
                            }}
                            exit={{
                                opacity: 0,
                                y: 2,
                                x: "-50%",
                            }}
                            transition={{
                                duration: 0.2,
                            }}
                            className="absolute text-md left-1/2 -translate-x-1/2 -top-10 whitespace-pre-wrap px-2 py-0.5 font-head"
                        >
                            {el.title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    className="flex items-center justify-center cursor-pointer"
                    style={{
                        width: widthIcon,
                        height: heightIcon,
                    }}
                >
                    {el.icon}
                </motion.div>
            </motion.div>
        </a>
    );
};

export default FloatingDockCore