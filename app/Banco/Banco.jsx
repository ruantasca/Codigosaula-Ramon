import React, { useState } from "react";
import { StyleSheet, View, Alert, Modal, Text, Button } from 'react-native';
import Saldo from "../../components/Saldo";
import ControlesTransacao from "../../components/ControlesTransacao";

export default function App() {
  
    const [saldo, setSaldo] = useState(7320.92);
    const [valor, setValor] = useState('');
    const [modalVisivel, setModalVisivel] = useState(false);
    const [mensagemModal, setMensagemModal] = useState('');

    const Depositar = () => {
      const valorDeposito = parseFloat(valor);
      if (!isNaN(valorDeposito) && valorDeposito > 0) {
        const bonus = valorDeposito * 0.01;
        setSaldo(saldo + valorDeposito + bonus);
        setMensagemModal(`Depósito realizado com sucesso! Saldo atual: R$ ${(saldo + valorDeposito + bonus).toFixed(2)}`);
        setModalVisivel(true);
        setValor('');
      } else {
        Alert.alert('Valor inválido', 'Por favor, insira um valor válido.');
      }
      <div>
      <h1>Registro</h1>
      <a href="/">Voltar para Home</a>
    </div>
    };

    const Sacar = () => {
      const valorSaque = parseFloat(valor);
      if (!isNaN(valorSaque) && valorSaque > 0 && valorSaque <= saldo) {
        const multa = saldo * 0.025;
        setSaldo(saldo - valorSaque - multa);
        setMensagemModal(`Saque realizado com sucesso! Saldo atual: R$ ${(saldo - valorSaque - multa).toFixed(2)}`);
        setModalVisivel(true);
        setValor('');
      } else {
        Alert.alert('Valor inválido', 'Por favor, insira um valor válido.');
      }
    };

    const fecharModal = () => {
      setModalVisivel(false);
    };

    return (
      <View style={estilos.container}>
        <Saldo saldo={saldo} />
        <ControlesTransacao
          valor={valor}
          setValor={setValor}
          Depositar={Depositar}
          Sacar={Sacar}
        />
        <Modal
          visible={modalVisivel}
          transparent={true}
          animationType="slide"
        >
          <View style={estilos.modalContainer}>
            <View style={estilos.modalContent}>
              <Text>{mensagemModal}</Text>
              <Button title="Fechar" onPress={fecharModal} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
  
  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
  });

