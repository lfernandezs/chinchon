import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './BaseView.styles';

const BaseView = ({
	children,
	scrollRef,
}: {
	children: React.ReactNode;
	scrollRef?: React.RefObject<KeyboardAwareScrollView>;
}) => {
	return (
		<SafeAreaView style={styles.screen}>
			<KeyboardAwareScrollView
				style={styles.keyboardAvoidingView}
				contentContainerStyle={{ justifyContent: 'center', flexGrow: 1 }}
				keyboardShouldPersistTaps={'always'}
				ref={scrollRef}
			>
				<View style={styles.container}>{children}</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default BaseView;
