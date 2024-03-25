import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TextInput, Button, Modal, Text } from 'react-native';
import { calcularParcela } from './utils/calculadora';

export default function App() {
  const [valorCompra, setValorCompra] = useState('');
  const [taxaJuros, setTaxaJuros] = useState('');
  const [numParcelas, setNumParcelas] = useState('');
  const [valorEntrada, setValorEntrada] = useState('');
  const [resultado, setResultado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Dados pessoais
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');

  const handleCalcularParcela = () => {
    const result = calcularParcela(valorCompra, taxaJuros, numParcelas, valorEntrada);
    setResultado(result);
    setModalVisible(true); // Mostrar o modal após o cálculo das parcelas
  };

  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.empresa}>NTC.FINANCE</Text>
      </View>
      <Text style={styles.title}>Simulação de Financiamento</Text>
      <Text style={styles.subtitulo}>Informe os seus dados para começar</Text>
      {/* Dados Pessoais */}
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <Text style={styles.subtitulo}>Informe suas condições de financiamento</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor da Compra"
        keyboardType="numeric"
        value={valorCompra}
        onChangeText={setValorCompra}
      />
      <TextInput
        style={styles.input}
        placeholder="Taxa de Juros (% ao mês)"
        keyboardType="numeric"
        value={taxaJuros}
        onChangeText={setTaxaJuros}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de Parcelas"
        keyboardType="numeric"
        value={numParcelas}
        onChangeText={setNumParcelas}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor de Entrada"
        keyboardType="numeric"
        value={valorEntrada}
        onChangeText={setValorEntrada}
      />
      <Button title="Simular" onPress={handleCalcularParcela} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Resultado da Simulação</Text>
            {/* Verificar se resultado não é nulo antes de acessar suas propriedades */}
            {resultado && (
              <>
                <Text>Parcela sem entrada: R$ {resultado.PMT1.toFixed(2)}</Text>
                <Text>Parcela com entrada: R$ {resultado.PMT2.toFixed(2)}</Text>
                <Text>Parcela com entrada e parcela iguais: R$ {resultado.PMT3.toFixed(2)}</Text>
              </>
            )}
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
  div: {
    backgroundColor: '#8B0000',
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  empresa: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#ffffff',
    paddingTop: '40px',
  },
 
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#ffffff',
    paddingTop: '30px',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Arial',
    color: '#ffffff',
    backgroundColor: '#8B0000',
    textAlign: 'center',
    width: '50%',
    paddingBottom: '10px',
    paddingTop: '10px',
  },
  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '50%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
