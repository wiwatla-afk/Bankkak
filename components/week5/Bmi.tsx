import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {

    // state
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');

    // 👇 เพิ่ม state สำหรับ description (ตามใบ้)
    const [description, setDescription] = useState("");

    console.log("STATE : ", weight, height, bmi, description);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");

        const w = parseFloat(weight);
        const h = parseFloat(height);

        let thisBMI = w / ((h / 100) * (h / 100));
        setBmi(thisBMI.toFixed(2));

        let desc = "";

        if (thisBMI < 18.5)
            desc = "Underweight - eat a bagel!";
        else if (thisBMI >= 18.5 && thisBMI <= 24.99)
            desc = "Normal - keep it up!";
        else if (thisBMI >= 25 && thisBMI <= 29.99)
            desc = "Overweight - exercise more!";
        else if (thisBMI >= 30 && thisBMI <= 39.99)
            desc = "Obese - get off the couch!";
        else
            desc = "Morbidly Obese - take action!";


        setDescription(desc);
    };

    return (
        <View>

            {/* แถวที่ 1 */}
            <View style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
                height: 100,
                justifyContent: "space-around",
                marginTop: 20
            }}>
                <Text>Weight (kg.)</Text>
                <TextInput
                    onChangeText={(newWeight) => setWeight(newWeight)}
                    value={weight}
                    placeholder="Input your weight"
                />
            </View>

            {/* แถวที่ 2 */}
            <View style={{
                backgroundColor: "white",
                padding: 20,
                borderRadius: 10,
                height: 100,
                justifyContent: "space-around",
                marginTop: 20
            }}>
                <Text>Height (cm.)</Text>
                <TextInput
                    onChangeText={(newHeight) => setHeight(newHeight)}
                    value={height}
                    placeholder="Input your height"
                />
            </View>

            {/* แถวที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 20 }}>
                {/* กล่อง BMI */}
                <View style={{
                    backgroundColor: "white",
                    flex: 1,
                    borderRadius: 10,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: 10
                }}>
                    <Text style={{ fontSize: 18 }}>{bmi}</Text>
                </View>


                <View style={{
                    backgroundColor: "white",
                    flex: 1,
                    borderRadius: 10,
                    height: 100,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 10
                }}>
                    <Text style={{ fontSize: 16, textAlign: "center" }}>
                        {description}
                    </Text>
                </View>
            </View>

            {/* ปุ่ม Calculate */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{
                    padding: 20,
                    backgroundColor: "blue",
                    borderRadius: 40
                }}>
                    <Text style={{
                        fontSize: 30,
                        textAlign: "center",
                        color: 'white'
                    }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
}
