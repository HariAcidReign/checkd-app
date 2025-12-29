import React, { useState, useEffect } from 'react'
import { Modal, Pressable, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback, View, Text } from 'react-native'
import { XStack } from 'tamagui'
import { Feather } from '@expo/vector-icons'
import { colors } from '../../../theme/tokens'
import { ProductivityType, PRODUCTIVITY_OPTIONS } from '../../../types/checkin'
import { styles } from './CheckInModal.styles'
import { CHECKIN_MODAL_CONSTANTS } from './CheckInModal.constants'

interface CheckInModalProps {
    visible: boolean
    onClose: () => void
    onSave: (text: string, productivity: ProductivityType) => void
}

/**
 * CheckInModal - Refactored with separated concerns
 */
export function CheckInModal({ visible, onClose, onSave }: CheckInModalProps) {
    const [text, setText] = useState('')
    const [productivity, setProductivity] = useState<ProductivityType>('Productive')
    const [dropdownOpen, setDropdownOpen] = useState(false)

    useEffect(() => {
        if (visible) {
            setText('')
            setProductivity('Productive')
            setDropdownOpen(false)
        }
    }, [visible])

    const handleSave = () => {
        onSave(text, productivity)
    }

    const handleCancel = () => {
        onClose()
    }

    const handleSelectProductivity = (option: ProductivityType) => {
        setProductivity(option)
        setDropdownOpen(false)
    }

    const getProductivityColor = (type: ProductivityType) => {
        switch (type) {
            case 'Productive': return colors.sage
            case 'Not Productive': return colors.terracotta
            case 'Neutral': return colors.gray
        }
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleCancel}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.overlay}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.keyboardView}
                    >
                        <Pressable
                            style={styles.modalWrapper}
                            onPress={(e) => {
                                e.stopPropagation()
                                if (dropdownOpen) setDropdownOpen(false)
                            }}
                        >
                            <View style={{ position: 'relative' }}>
                                <View style={styles.shadowLayer} />
                                <View style={styles.modalContent}>
                                    <Text style={styles.title}>
                                        {CHECKIN_MODAL_CONSTANTS.TITLE}
                                    </Text>

                                    <View style={styles.inputContainer}>
                                        <TextInput
                                            value={text}
                                            onChangeText={setText}
                                            placeholder={CHECKIN_MODAL_CONSTANTS.PLACEHOLDER}
                                            placeholderTextColor={colors.gray}
                                            multiline
                                            returnKeyType="done"
                                            blurOnSubmit={true}
                                            onSubmitEditing={Keyboard.dismiss}
                                            numberOfLines={3}
                                            style={styles.textInput}
                                        />
                                    </View>

                                    <View style={{ marginBottom: 24, zIndex: 100 }}>
                                        <Text style={styles.label}>
                                            {CHECKIN_MODAL_CONSTANTS.PRODUCTIVITY_LABEL}
                                        </Text>

                                        <Pressable
                                            onPress={(e) => {
                                                e.stopPropagation()
                                                setDropdownOpen(!dropdownOpen)
                                                Keyboard.dismiss()
                                            }}
                                            style={styles.dropdownTrigger}
                                        >
                                            <XStack alignItems="center" gap={10}>
                                                <View
                                                    style={[
                                                        styles.dot,
                                                        { backgroundColor: getProductivityColor(productivity) }
                                                    ]}
                                                />
                                                <Text
                                                    style={{
                                                        fontSize: 16,
                                                        color: colors.brown,
                                                        fontFamily: CHECKIN_MODAL_CONSTANTS.FONTS.SEMIBOLD
                                                    }}
                                                >
                                                    {productivity}
                                                </Text>
                                            </XStack>
                                            <Feather
                                                name={dropdownOpen ? 'chevron-up' : 'chevron-down'}
                                                size={20}
                                                color={colors.brown}
                                            />
                                        </Pressable>

                                        {dropdownOpen && (
                                            <View style={styles.dropdownOptions}>
                                                {PRODUCTIVITY_OPTIONS.map((option) => (
                                                    <Pressable
                                                        key={option}
                                                        onPress={(e) => {
                                                            e.stopPropagation()
                                                            handleSelectProductivity(option)
                                                        }}
                                                        style={({ pressed }) => [
                                                            styles.optionItem,
                                                            {
                                                                backgroundColor: pressed || productivity === option ? colors.creamDark : 'transparent'
                                                            }
                                                        ]}
                                                    >
                                                        <View
                                                            style={[
                                                                styles.dot,
                                                                { backgroundColor: getProductivityColor(option) }
                                                            ]}
                                                        />
                                                        <Text
                                                            style={{
                                                                fontSize: 16,
                                                                color: colors.brown,
                                                                fontFamily: CHECKIN_MODAL_CONSTANTS.FONTS.REGULAR
                                                            }}
                                                        >
                                                            {option}
                                                        </Text>
                                                        {productivity === option && (
                                                            <Feather name="check" size={16} color={colors.brown} style={{ marginLeft: 'auto' }} />
                                                        )}
                                                    </Pressable>
                                                ))}
                                            </View>
                                        )}
                                    </View>

                                    <XStack gap={12}>
                                        <View style={styles.buttonContainer}>
                                            <View style={[styles.buttonShadow, { backgroundColor: colors.gray }]} />
                                            <Pressable
                                                onPress={handleCancel}
                                                style={({ pressed }) => [
                                                    styles.buttonBase,
                                                    {
                                                        backgroundColor: pressed ? colors.creamDark : colors.cream,
                                                        borderColor: colors.brown,
                                                        transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                                                    }
                                                ]}
                                            >
                                                <Text style={[styles.buttonText, { color: colors.brown }]}>
                                                    {CHECKIN_MODAL_CONSTANTS.CANCEL_TEXT}
                                                </Text>
                                            </Pressable>
                                        </View>

                                        <View style={styles.buttonContainer}>
                                            <View style={[styles.buttonShadow, { backgroundColor: colors.brownDark }]} />
                                            <Pressable
                                                onPress={handleSave}
                                                style={({ pressed }) => [
                                                    styles.buttonBase,
                                                    {
                                                        backgroundColor: pressed ? colors.brownDark : colors.brown,
                                                        borderColor: colors.brownDark,
                                                        transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                                                    }
                                                ]}
                                            >
                                                <Text style={[styles.buttonText, { color: colors.cream }]}>
                                                    {CHECKIN_MODAL_CONSTANTS.SAVE_TEXT}
                                                </Text>
                                            </Pressable>
                                        </View>
                                    </XStack>
                                </View>
                            </View>
                        </Pressable>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
