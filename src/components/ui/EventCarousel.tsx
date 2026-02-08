import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    {
        url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop',
        title: 'Modern Wedding Decor',
        category: 'Marriage'
    },
    {
        url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop',
        title: 'Vibrant Music Concert',
        category: 'Concert'
    },
    {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop',
        title: 'Corporate Gala Night',
        category: 'Corporate'
    },
    {
        url: 'https://images.unsplash.com/photo-1514525253361-b44243a417ba?q=80&w=2670&auto=format&fit=crop',
        title: 'Elegant Reception',
        category: 'Reception'
    }
];

const EventCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden rounded-[48px] bg-gray-100 dark:bg-slate-800 ring-1 ring-gray-200 dark:ring-slate-700 transition-colors duration-300">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src={images[currentIndex].url}
                        alt={images[currentIndex].title}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>

                    <div className="absolute bottom-12 left-12 right-12">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <span className="px-3 py-1 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                                {images[currentIndex].category}
                            </span>
                            <h3 className="text-3xl md:text-5xl font-black text-white">{images[currentIndex].title}</h3>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-brand-dark dark:text-white hover:bg-white dark:hover:bg-slate-700 transition-all z-10"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 glass rounded-full flex items-center justify-center text-brand-dark dark:text-white hover:bg-white dark:hover:bg-slate-700 transition-all z-10"
                onClick={() => paginate(1)}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'w-8 bg-brand-blue' : 'bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default EventCarousel;
