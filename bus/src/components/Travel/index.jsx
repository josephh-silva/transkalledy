import './index.css';
import Bus from '../../assets/travel.svg'; // Corrigir o caminho do arquivo
import { useEffect, useState, useRef } from 'react';

function Travel() {
  const [counter, setCounter] = useState(0);
  const [counterV, setCounterV] = useState(0);
  const [counterP, setCounterP] = useState(0);
  const [counterK, setCounterK] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  // Refs para cada contador
  const counterRef = useRef(null);
  const counterVRef = useRef(null);
  const counterPRef = useRef(null);
  const counterKRef = useRef(null);

  // Função de contagem
  const countUp = (setState, maxCount, intervalTime = 20) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= maxCount) {
        setState(i++);
      } else {
        clearInterval(interval);
      }
    }, intervalTime);
    return interval;
  };

  useEffect(() => {
    // Função de callback para o Intersection Observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStartCounting(true); // Inicia a contagem quando a div entra na tela
        }
      });
    };

    // Criando o Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // A div precisa estar 50% visível para ativar a contagem
    });

    // Observa as divs dos contadores
    if (counterRef.current) observer.observe(counterRef.current);
    if (counterVRef.current) observer.observe(counterVRef.current);
    if (counterPRef.current) observer.observe(counterPRef.current);
    if (counterKRef.current) observer.observe(counterKRef.current);

    // Limpeza do observer quando o componente for desmontado
    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
      if (counterVRef.current) observer.unobserve(counterVRef.current);
      if (counterPRef.current) observer.unobserve(counterPRef.current);
      if (counterKRef.current) observer.unobserve(counterKRef.current);
    };
  }, []);

  useEffect(() => {
    if (startCounting) {
      // Inicia a contagem para cada contador
      const interval1 = countUp(setCounter, 51);
      const interval2 = countUp(setCounterV, 91);
      const interval3 = countUp(setCounterP, 986, 10);
      const interval4 = countUp(setCounterK, 10);

      // Limpeza quando o componente for desmontado
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
        clearInterval(interval4);
      };
    }
  }, [startCounting]); // Inicia a contagem quando startCounting for true

  return (
    <section className="container container-travel">
      <div className="travel-part-one"></div>
      <div className="travel-part-two">
        <p>
          A TransKalledy é uma empresa dedicada a proporcionar viagens municipais e estaduais
          <br />
          com total segurança, conforto e pontualidade. <br />
          Nossa missão é conectar pessoas e destinos, <br />
          garantindo que cada viagem seja uma experiência tranquila e eficiente.
        </p>
        <div className="travels">
          <span ref={counterRef} className="counter">+ {counter} clientes</span>
          <span ref={counterVRef} className="counter">+ {counterV} Veiculos</span>
          <span ref={counterPRef} className="counter">+ {counterP} Mil pessoas transportadas</span>
          <span ref={counterKRef} className="counter">+ {counterK} Milhões de KMs percorridos </span>
        </div>
      </div>
    </section>
  );
}

export default Travel;
