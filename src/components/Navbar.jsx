import { useCallback, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FALLBACK_LANGUAGE, useI18n } from '../context/I18nContext'
import Logo from '/logo-v5.webp'

const Navbar = () => {
	const [contributors, setContributors] = useState([])
	const { t, language, setLanguage, availableLanguages } = useI18n()
	const location = useLocation()
	const navigate = useNavigate()

	const activeLanguage = language ?? FALLBACK_LANGUAGE

	const withLanguagePrefix = useCallback(
		(targetPath) => {
			const sanitizedPath = targetPath.startsWith('/')
				? targetPath.slice(1)
				: targetPath
			if (!sanitizedPath) {
				return `/${activeLanguage}`
			}
			return `/${activeLanguage}/${sanitizedPath}`
		},
		[activeLanguage]
	)

	const buildPathForLanguage = useCallback(
		(nextLanguage) => {
			const segments = location.pathname.split('/').filter(Boolean)
			if (segments.length === 0) {
				return `/${nextLanguage}`
			}
			const [, ...rest] = segments
			return rest.length > 0
				? `/${[nextLanguage, ...rest].join('/')}`
				: `/${nextLanguage}`
		},
		[location.pathname]
	)

	useEffect(() => {
		const fetchContributors = async () => {
			try {
				const response = await fetch(
					'https://api.allorigins.win/raw?url=' +
						encodeURIComponent(
							'https://api.github.com/repos/2MJ-DEV/BuyMeACoffee-Africa/contributors'
						)
				)

				if (!response.ok) {
					throw new Error('Failed to fetch contributors')
				}

				const data = await response.json()
				setContributors(data)
			} catch (err) {
				console.error(err)
			}
		}

		fetchContributors()
	}, [])

	const contributorCountLabel =
		contributors.length === 1
			? t('navbar.contributors.singular', { count: contributors.length })
			: t('navbar.contributors.plural', { count: contributors.length })

	const handleLanguageChange = (event) => {
		const nextLanguage = event.target.value
		if (availableLanguages.includes(nextLanguage)) {
			setLanguage(nextLanguage)
			const nextPath = buildPathForLanguage(nextLanguage)
			navigate(
				{
					pathname: nextPath,
					search: location.search,
					hash: location.hash,
				},
				{ replace: false }
			)
		}
	}

	return (
		<header className='fixed inset-x-0 top-6 z-50'>
			<nav className='surface-blur mx-auto flex max-w-6xl items-center justify-between rounded-full px-6 py-3 transition-all duration-300'>
				<Link to={withLanguagePrefix('/')} className='flex items-center gap-3'>
					<div className='flex items-center gap-2'>
						<span className='inline-flex size-11 items-center justify-center rounded-full bg-[var(--color-cream)] shadow-inner'>
							<img src={Logo} alt='' width={32} height={32} />
						</span>
						<div className='flex flex-col leading-tight'>
							<span className='text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-latte)]'>
								BuyMeACoffee
							</span>
							<span className='text-xl font-semibold text-[var(--color-espresso)]'>
								Africa
							</span>
						</div>
					</div>
				</Link>

				<ul className='flex items-center gap-4'>
					<li>
						<label className='sr-only' htmlFor='language-toggle'>
							{t('common.language.label')}
						</label>
						<button
							id='language-toggle'
							onClick={() => {
								const nextLang =
									activeLanguage === 'en'
										? 'fr'
										: activeLanguage === 'fr'
											? 'en'
											: availableLanguages[0]
								handleLanguageChange({ target: { value: nextLang } })
							}}
							className='btn-outline inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium tracking-wide text-[var(--color-espresso)]'>
							{activeLanguage === 'en'
								? t('common.language.english')
								: activeLanguage === 'fr'
									? t('common.language.french')
									: activeLanguage.toUpperCase()}
						</button>
					</li>

					<li>
						<Link
							to={withLanguagePrefix('/contributors')}
							className='btn-secondary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium'>
							<span className='inline-block size-2 rounded-full bg-[var(--color-honey)]' />
							<span>{contributorCountLabel}</span>
						</Link>
					</li>
					<li>
						<Link
							to={withLanguagePrefix('/login')}
							className='btn-primary inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold'>
							{t('common.actions.goToApp')}
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Navbar
